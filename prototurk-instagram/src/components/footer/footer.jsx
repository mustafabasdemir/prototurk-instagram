export default function Footer(){
    return(
        <footer className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 fixed bottom-0">
          <div className=" py-16">
            <p className="flex justify-center flex-wrap gap-x-4 text-xs  text-gray-500">
              <span>Meta</span>
              <span>About</span>
              <span>Blog</span>
              <span>Jobs</span>
              <span>API</span>
              <span>Privacy</span>
              <span>Terms</span>
              <span>Top Accounts</span>
              <span>Instagram Lite</span>
              <span>Threads</span>
              <span>Visual Arts</span>
              <span>Meta Verified</span>
            </p>
            <p className="justify-center text-center mt-2 text-xs  text-gray-500">
              © 2024 Instagram from Meta
            </p>
          </div>
        </footer>
    );
}