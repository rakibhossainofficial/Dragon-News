import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="">
        <h2 className="text-2xl font-bold my-4">Find Us On</h2>
      
      <div className="divide-y flex flex-col gap-3">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
        >
          <FaFacebook className="text-blue-600 text-xl" />
          <span>Facebook</span>
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
        >
          <FaTwitter className="text-sky-500 text-xl" />
          <span>Twitter</span>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
        >
          <FaInstagram className="text-pink-500 text-xl" />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  )
}

export default FindUs

