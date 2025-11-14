// import React from 'react'

// export default function Footer(){
//   return (
//     <footer className="bg-white border-t mt-12">
//       <div className="container px-4 py-10 grid md:grid-cols-3 gap-6">
//         <div>
//           <h4 className="font-semibold">We</h4>
//           <p className="text-sm text-gray-500 mt-2">Mock tests, PDFs and topper strategies.</p>
//         </div>
//         <div>
//           <h5 className="font-semibold">Resources</h5>
//           <ul className="mt-2 text-sm text-gray-600 space-y-1">
//             <li>CAT Syllabus</li>
//             <li>VARC Cheat Sheet</li>
//             <li>Quant Formulas</li>
//           </ul>
//         </div>
//         <div>
//           <h5 className="font-semibold">Follow</h5>
//           <div className="flex gap-3 mt-3">
//             <span>Twitter</span>
//             <span>YouTube</span>
//             <span>Facebook</span>
//           </div>
//         </div>
//       </div>

//       <div className="border-t">
//         <div className="container px-4 py-4 text-sm text-gray-500 flex justify-between">
//           <div>© {new Date().getFullYear()} We Clone</div>
//           <div>Made with ♥</div>
//         </div>
//       </div>
//     </footer>
//   )
// }

import React from "react";
import { Facebook, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        <div>
          <h3 className="font-semibold text-xl text-white">We</h3>
          <p className="mt-3 text-sm">India's No.1 CAT Online Coaching</p>
        </div>

        <div>
          <h4 className="font-medium text-white">Courses</h4>
          <ul className="space-y-2 mt-2 text-sm">
            <li>CAT 2026 Full Course</li>
            <li>CAT Pro Course</li>
            <li>Mock Test Series</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-white">Resources</h4>
          <ul className="space-y-2 mt-2 text-sm">
            <li>CAT Syllabus</li>
            <li>Formula PDFs</li>
            <li>VARC Tricks</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-white">Follow us</h4>
          <div className="flex gap-4 mt-3">
            <Facebook />
            <Youtube />
            <Instagram />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 mt-10 text-sm">
        © {new Date().getFullYear()} All Rights Reserved We
      </div>
    </footer>
  );
}
