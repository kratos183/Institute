import mongoose from "mongoose";

const AdmissionSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      trim: true,
      match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    qualification: {
      type: String,
      required: [true, "Qualification is required"],
      enum: {
        values: ["10th", "12th", "Diploma", "Graduate", "Post Graduate", "Other"],
        message: "Please select a valid qualification",
      },
    },
    course: {
      type: String,
      required: [true, "Course selection is required"],
      enum: {
        values: [
          "Full Stack Web Development",
          "AI & Machine Learning",
          "Data Analysis",
          "Cybersecurity & Ethical Hacking",
          "ADCA + Tally",
        ],
        message: "Please select a valid course",
      },
    },
    message: {
      type: String,
      trim: true,
      maxlength: [500, "Message cannot exceed 500 characters"],
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "contacted", "enrolled", "rejected"],
      default: "pending",
    },
    source: {
      type: String,
      default: "website",
    },
    ipAddress: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Index for fast queries
AdmissionSchema.index({ email: 1 });
AdmissionSchema.index({ mobile: 1 });
AdmissionSchema.index({ createdAt: -1 });
AdmissionSchema.index({ status: 1 });

// Virtual: display name
AdmissionSchema.virtual("displayName").get(function () {
  return this.fullName;
});

const Admission =
  mongoose.models.Admission || mongoose.model("Admission", AdmissionSchema);

export default Admission;
