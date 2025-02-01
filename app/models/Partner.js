// models/Partner.js
import mongoose from "mongoose";

const PartnerSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    phone: String,
    hotelName: String,
    hotelAddress: String,
    hotelCategory: String,
    services: Object,
    partnershipReason: String,
    locationsCount: Number,
    termsAccepted: Boolean,
    selectedPlan: String, // Store the selected plan here
  },
  { timestamps: true }
);

const Partner = mongoose.models.Partner || mongoose.model("Partner", PartnerSchema);

export default Partner;
