import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Avatar from '../components/avatar/avatar'
import SVGInsta from '../components/svg/svgInsta'
import SVGGit from '../components/svg/svgithub'
import SVGLink from '../components/svg/svglinkedin'
import SVGEmail from '../components/svg/svgemail'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-color">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="text-center pb-2">
            <Avatar />
          </div>
          <h2 className='mt-6 text-center text-3xl font-bold text-white'>Kaue Oliveira</h2>
          <p className="mt-2 pb-4 text-center text-sm text-gray-600">
            <a className="font-medium text-sky-600 hover:text-sky-500">
              Full Stack Engineer
            </a>
          </p>
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="mt-6 grid grid-cols-1 gap-3">
              <div>
                <a
                  href="https://github.com/sh4rkzy/"                 
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-sky-200"
                >
                  <SVGGit/>
                  <h1 className='text-gray-600 pl-2'>Github</h1>
                </a>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/kauecampos-/"                  
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-sky-200"
                >
                  <SVGLink/>
                  <h1 className='text-gray-600 pl-2'>Linkedin</h1>
                </a>
              </div>

              <div>
                <a
                  href="https://www.instagram.com/sh4rkzy__/"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-sky-200"
                >
                  <SVGEmail/>
                  <h1 className='text-gray-600 pl-2'>Email</h1>
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/sh4rkzy__/"                 
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-sky-200"
                >
                  <SVGInsta />
                  <h1 className='text-gray-600 pl-2'>Instagram</h1>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
