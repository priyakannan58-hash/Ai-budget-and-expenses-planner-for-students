function Profile() {
  return (
    <div className="min-h-screen bg-purple-50 p-8">

      <h1 className="text-4xl font-bold text-purple-700 mb-8">
        Profile
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">

        <p><strong>Name:</strong> Priya</p>

        <p><strong>Email:</strong> student@gmail.com</p>

        <p><strong>Course:</strong> B.Tech IT</p>

        <p><strong>Currency:</strong> ₹ INR</p>

      </div>

    </div>
  );
}

export default Profile;