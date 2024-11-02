import { Helmet } from "react-helmet";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

export default function Home()
{
    return (
      <>
        <Helmet>
          <title>Instagram</title>
        </Helmet>

        {/* kablosuz kedi  */}
        <div class="flex max-w-xl mx-auto my-5 overflow-hidden bg-white rounded-lg shadow-md">
          <div class="flex items-center w-full">
            <div class="w-full">
              <div class="flex flex-row px-2 py-3 mx-3 mt-2">
                <div class="w-auto h-auto border-2 border-pink-500 rounded-full">
                  <img
                    class="object-cover w-12 h-12 border-2 rounded-full shadow cursor-pointer border-white-500"
                    alt="User avatar"
                    src="https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg"
                  />
                </div>
                <div class="flex flex-col mt-1 mb-2 ml-4">
                  <div class="text-sm font-semibold text-gray-600">
                    kablosuzkedi
                  </div>
                  <div class="flex w-full mt-1">
                    <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                      Amsterdam
                    </div>
                    <div class="text-xs font-thin text-gray-400">
                      • 2 hour ago
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-b border-gray-100"></div>
              <div class="px-2 mx-3 mt-6 text-sm font-medium text-gray-400 mb-7">
                <img
                  class="rounded"
                  src="https://i.ytimg.com/vi/dHNSpoADEM8/hq720.jpg"
                  alt="codes"
                />
              </div>
              <div class="px-2 mx-3 mb-2 text-lg font-medium text-gray-600">
                <b>kablosuzkedi </b>gelin la bekliyorumm 
              </div>
              <div class="flex w-full border-t border-gray-100">
                <div class="flex flex-row mx-5 my-3 text-[16px]">
                  <div class="flex items-center mb-2 mr-4 font-normal text-gray-700 rounded-md">
                    <FaRegHeart />
                    <div class="ml-1 font-light text-gray-500 text-ms">
                      {" "}
                      1.356 likes
                    </div>
                  </div>
                  <div class="flex items-center mb-2 mr-4  font-normal text-gray-700 rounded-md">
                    <FaRegComment />
                    <div class="ml-1 font-light text-gray-500 text-ms">
                      {" "}
                      15 Comment
                    </div>
                  </div>
                  <div class="flex items-center mb-2 mr-4  font-normal text-gray-700 rounded-md">
                    <FiSend />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* muhammed  */}
        <div class="flex max-w-xl mx-auto my-5 overflow-hidden bg-white rounded-lg shadow-md">
          <div class="flex items-center w-full">
            <div class="w-full">
              <div class="flex flex-row px-2 py-3 mx-3 mt-2">
                <div class="w-auto h-auto border-2 border-pink-500 rounded-full">
                  <img
                    class="object-cover w-12 h-12 border-2 rounded-full shadow cursor-pointer border-white-500"
                    alt="User avatar"
                    src="https://i.ibb.co/9ZPf8FZ/mbasdemir-Insta-Avatar.jpg"
                  />
                </div>
                <div class="flex flex-col mt-1 mb-2 ml-4">
                  <div class="text-sm font-semibold text-gray-600">
                    muhammedbasdemirr
                  </div>
                  <div class="flex w-full mt-1">
                    <div class="mr-1 text-xs text-blue-700 cursor-pointer font-base">
                      Istanbul
                    </div>
                    <div class="text-xs font-thin text-gray-400">
                      • 10 minutes ago
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-b border-gray-100"></div>
              <div class="px-2 mx-3 mt-6 text-sm font-medium text-gray-400 mb-7">
                <img
                  class="rounded"
                  src="https://img.freepik.com/free-photo/panoramic-istanbul-city-twilight-turkey_335224-1278.jpg"
                  alt="istanbul"
                />
              </div>
              <div class="px-2 mx-3 mb-2 text-lg font-medium text-gray-600">
                <b>muhammedbasdemirr </b>Cay içiyrum ☕
              </div>
              <div class="flex w-full border-t border-gray-100">
                <div class="flex flex-row mx-5 my-3 text-[16px]">
                  <div class="flex items-center mb-2 mr-4 font-normal text-gray-700 rounded-md">
                    <FaRegHeart />
                    <div class="ml-1 font-light text-gray-500 text-ms">
                      {" "}
                      117 likes
                    </div>
                  </div>
                  <div class="flex items-center mb-2 mr-4  font-normal text-gray-700 rounded-md">
                    <FaRegComment />
                    <div class="ml-1 font-light text-gray-500 text-ms">
                      {" "}
                      2 Comment
                    </div>
                  </div>
                  <div class="flex items-center mb-2 mr-4  font-normal text-gray-700 rounded-md">
                    <FiSend />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}