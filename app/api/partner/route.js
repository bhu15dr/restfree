// app/api/partner/route.js
import connectDb from '../../lib/db';  // MongoDB connection utility
import Partner from '../../models/Partner';  // Mongoose model for Partner

export async function POST(req) {
  try {
    // Connect to the MongoDB database before proceeding
    await connectDb();

    // Parse the incoming request body
    const data = await req.json();
        
    // Create a new Partner document with the data
    const newPartner = new Partner({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      hotelName: data.hotelName,
      hotelAddress: data.hotelAddress,
      hotelCategory: data.hotelCategory,
      services: data.services,
      partnershipReason: data.partnershipReason,
      locationsCount: data.locationsCount,
      termsAccepted: data.termsAccepted,
      selectedPlan: data.selectedPlan,  // Saving selected plan to the DB
    });

    // Save the document to MongoDB
    const savedPartner = await newPartner.save();

    // Return a response with a success message
    return new Response(JSON.stringify({ message: 'Partner data saved successfully!', partnerId: savedPartner._id }), { status: 200 });
  } catch (error) {
    console.error('Error saving partner data:', error);
    return new Response(JSON.stringify({ message: 'Error saving partner data.' }), { status: 500 });
  }
}
