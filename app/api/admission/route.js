import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Admission from "@/lib/models/Admission";

const VALID_COURSES = [
  "Full Stack Web Development",
  "AI & Machine Learning",
  "Data Analysis",
  "Cybersecurity & Ethical Hacking",
  "ADCA + Tally",
];

const VALID_QUALIFICATIONS = [
  "10th",
  "12th",
  "Diploma",
  "Graduate",
  "Post Graduate",
  "Other",
];

/**
 * Server-side validation helper
 */
function validateAdmissionData(data) {
  const errors = {};

  // Full Name
  if (!data.fullName || typeof data.fullName !== "string") {
    errors.fullName = "Full name is required";
  } else if (data.fullName.trim().length < 3) {
    errors.fullName = "Name must be at least 3 characters long";
  } else if (data.fullName.trim().length > 100) {
    errors.fullName = "Name cannot exceed 100 characters";
  }

  // Mobile
  if (!data.mobile || typeof data.mobile !== "string") {
    errors.mobile = "Mobile number is required";
  } else if (!/^[6-9]\d{9}$/.test(data.mobile.trim())) {
    errors.mobile = "Please enter a valid 10-digit Indian mobile number";
  }

  // Email
  if (!data.email || typeof data.email !== "string") {
    errors.email = "Email address is required";
  } else if (!/^\S+@\S+\.\S+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  // Qualification
  if (!data.qualification) {
    errors.qualification = "Please select your qualification";
  } else if (!VALID_QUALIFICATIONS.includes(data.qualification)) {
    errors.qualification = "Invalid qualification selected";
  }

  // Course
  if (!data.course) {
    errors.course = "Please select a course";
  } else if (!VALID_COURSES.includes(data.course)) {
    errors.course = "Invalid course selected";
  }

  // Message (optional but max length)
  if (data.message && data.message.length > 500) {
    errors.message = "Message cannot exceed 500 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export async function POST(request) {
  try {
    // Parse JSON body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request body" },
        { status: 400 }
      );
    }

    // Server-side validation
    const { isValid, errors } = validateAdmissionData(body);
    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please check the form fields.",
          errors,
        },
        { status: 422 }
      );
    }

    // Connect to DB
    await connectDB();

    // Check for duplicate submission (same email + course within 24 hours)
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const existing = await Admission.findOne({
      email: body.email.trim().toLowerCase(),
      course: body.course,
      createdAt: { $gte: oneDayAgo },
    });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message:
            "You have already submitted an enquiry for this course. Our team will contact you within 24 hours.",
        },
        { status: 409 }
      );
    }

    // Get IP for rate-limiting (optional logging)
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "unknown";

    // Save to database
    const admission = await Admission.create({
      fullName: body.fullName.trim(),
      mobile: body.mobile.trim(),
      email: body.email.trim().toLowerCase(),
      qualification: body.qualification,
      course: body.course,
      message: body.message ? body.message.trim() : "",
      source: "website",
      ipAddress: ip,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your admission enquiry has been submitted successfully! Our counsellor will call you within 24 hours.",
        data: {
          id: admission._id.toString(),
          name: admission.fullName,
          course: admission.course,
          submittedAt: admission.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Admission API Error:", error);

    // Mongoose validation error
    if (error.name === "ValidationError") {
      const validationErrors = {};
      Object.keys(error.errors).forEach((key) => {
        validationErrors[key] = error.errors[key].message;
      });
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: validationErrors,
        },
        { status: 422 }
      );
    }

    // MongoDB duplicate key error
    if (error.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message: "This email has already been registered.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Server error. Please try again later or call us directly.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: "Method not allowed" },
    { status: 405 }
  );
}
