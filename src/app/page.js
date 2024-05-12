import Image from 'next/image'
import Script from 'next/script';
import Link from 'next/link'
import TableIndex from "@/components/Table.Index";
export default function Home() {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.12.0/tsparticles.confetti.bundle.min.js" strategy="beforeInteractive"></Script>
      <Script id="blast_effect">
        {
          `const end = Date.now() + 30 * 150;

          // Google colors
          const colors = ["#4285F4", "#0F9D58", "#F4B400", "#DB4437"];
          
          (function frame() {
            confetti({
              particleCount: 2,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: colors,
            });
          
            confetti({
              particleCount: 2,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: colors,
            });
          
            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          })();
          `
        }
      </Script>
      <nav className='w-full  shadow-md relative '>
        <div className="bg-gray-900 text-blue-500 w-full m-auto text-center p-2 flex justify-center items-center">
          <div className=""><Image src="/assets/cloudLg.png" alt="me" width="40" height="40" /></div>
          <p className=''>
             Gen AI Study Jam Leaderboard
          </p>
        </div>

        <div className="p-3 flex mob:flex-col m-auto max-w-6xl justify-between items-center">
          <div className="logo mob:border-b mob:border-b-gray-200 flex justify-center items-center">
            <div className="img w-16 h-1w-16 rounded-full ">
              <Image src="/assets/gdsc-logo.png" alt="me" width="64" height="64" />
            </div>
            <div className="text flex flex-col justify-start items-start">
              <p className="text-base">Google Developer Students Club</p>
              <p className="text-xs"> Bangalore Institute of Technology</p>

            </div>
          </div>

          <div className="links mob:py-3 flex justify-center items-center space-x-5">

        
            <Link href="https://www.linkedin.com/in/gdsc-bit-bangalore-29b711249/"><div className="cursor-pointer insta">

              <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="#" /></svg>
            </div></Link>

          </div>
        </div>
      </nav>

      <TableIndex />

      <div className="w-full p-2 text-center justify-center fixed bottom-0 left-0 bg-gray-900 text-gray-300" >
  Developed By <a href="https://github.com/divyej" className="text-blue-500">Divye Jain</a>
</div>
</>
  )
}
