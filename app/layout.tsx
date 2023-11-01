"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import ReduxProvider from '../components/Provider/reduxProvider'
import SideBar from '../components/GlobalComponents/sideBar/SideBar'
import TabSection from '@/components/GlobalComponents/bottomTab/TabSection'
import ReactQueryProvider from '../components/Provider/reactQueryProvider'
import { usePathname } from 'next/navigation';
import GoogleProvider from '../components/Provider/GoogleProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import AuthMe from '../components/Provider/AuthMe';
import SocketProvider from '@/components/context/SocketProvider';
import DndProvider from '../components/Provider/DndProvider';

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Daily Dash',
//   description: 'next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const router = useRouter();


  console.log(pathname);
  const restriction_SideBar__Tab = ["/login", "/reset-password", "/forget-password", "/block", "/signup"];
  const restriction__Tab = ["/meet/room", "/trial"];
  return (
    <html lang="en">
      <title>DailyDash</title>
      <ReduxProvider>
        <SocketProvider>
          <GoogleProvider>
            <DndProvider>
              <ReactQueryProvider>
                <AuthMe />
                <body className={inter.className}>
                  <div className='flex w-[100vw] justify-center items-center'>
                    <ToastContainer />
                    <div className='w-[50px]'>
                      {!restriction_SideBar__Tab.includes(pathname) && <SideBar />}
                    </div>
                    {/* <div className='flex w-full flex-col'> */}
                    <div className='w-full  h-screen flex flex-col justify-between '>
                      {children}
                      {!restriction_SideBar__Tab.includes(pathname) && !restriction__Tab.includes(pathname) && <TabSection />}
                    </div>
                    {/* </div> */}
                  </div>
                </body>
              </ReactQueryProvider>
            </DndProvider>
          </GoogleProvider>
        </SocketProvider>
      </ReduxProvider>
    </html>
  )
}
