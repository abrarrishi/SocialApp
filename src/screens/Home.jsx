function Home() {
  return (
    <div>
      <>
        <div className="grid grid-cols-[0.3fr_2fr]">
          <div className=" bg-green-700 p-4">
            <div>logo:Social</div>
            <div>Search</div>
            <div>Memories</div>
            <div>Videos</div>
            <div>Fundraisers</div>
            <div>Events</div>
            <div>Trnding</div>
            <div>Entertainment</div>
          </div>
          <div className=" bg-yellow-600  p-4">
            <div className="flex justify-between mb-2">
              <div>Home</div>
              <div>People</div>
              <div>Market</div>
              <div>Groups</div>
              <div className="flex gap-2">
                <button className="bg-blue-600 text-white rounded-xl px-2">
                  Messages
                </button>
                <button className="bg-blue-600 text-white rounded-xl px-2">
                  Notifications
                </button>
                <button className="bg-blue-600 text-white rounded-xl px-2">
                  Profile
                </button>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <img
                src="src\images\Resume.jpg"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                alt="get it from users profil after login as in facebook"
              />
              <input type="text-box" className="rounded-xl h-14 w-full" />
            </div>
            <div className="flex justify-center gap-10">
              <div>Go Live</div>
              <div>Add Photo/Video</div>
              <div>How are you Feeling?</div>
            </div>
            <div className="flex gap-4">
              <img
                src="src\images\Resume.jpg"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                alt="userStories"
              />
              <img
                src="src\images\Resume.jpg"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                alt="get it from users profil after login as in facebook"
              />
              <img
                src="src\images\Resume.jpg"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                alt="get it from users profil after login as in facebook"
              />
              <img
                src="src\images\Resume.jpg"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                alt="get it from users profil after login as in facebook"
              />
              <img
                src="src\images\Resume.jpg"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                alt="get it from users profil after login as in facebook"
              />
            </div>
            <div>Post Feed</div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Home;
