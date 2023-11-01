import PaginationBottonSection from '@/components/GlobalComponents/PaginationBottonSection'
import PaginationTopSection from '@/components/GlobalComponents/PaginationTopSection'
import Slider from '@/components/GlobalComponents/Slider'
import HorizontalThrreDot from '@/components/assets/HorizontalThrreDot'
import OpenIco from '@/components/assets/OpenIco'
import React, { useContext, useState } from 'react'
import { MeetingContext } from '../types'
import MeetContext from './State/MeetContext'
import CreateMeetingForm from './CreateMeetingForm'

const ScheduledMeeting = () => {
    const { isEdit, setIsEdit, show, setShow, createMeeting, setCreateMeeting, selectedTab, selectedId, setSelectedId , setStatus , status , rows ,setRows , page , setPage , setSearch , search } = useContext<MeetingContext>(MeetContext)
    console.log({ page , search , status , rows })
    console.log(createMeeting || (isEdit && selectedTab == 0 && selectedId !== null))
    return (
        <>
            {
                show && <Slider show={show} setShow={setShow} title={'Tile'} setIsEdit={setIsEdit} >
                    {/* rows */}
                    <div className='flex my-2 items-center'>
                        <div className='text-lg font-medium mr-2 text-slate-700'>Title: </div>
                        <div className='text-base text-slate-700 font-light'>Project</div>
                    </div>
                </Slider>
            }
            <PaginationTopSection setStatus={setStatus} status={status} setRows={setRows} setSearch={setSearch} search={search} rows={rows} isStatus={true} />
            <div className='w-[100% - 70px] overflow-x-scroll'>
                <table className='w-full overflow-x-scroll my-2'>
                    <thead className='border border-transparent border-b-slate-50 border-b-1 mb-2'>
                        <tr className='bg-slate-50'>
                            <th className='p-2 w-auto min-w-min max-w-[100px] text-slate-700 text-center border border-x-0 border-t-0 border-b-1 truncate'>SI No.</th>
                            <th className='p-2 w-auto min-w-min max-w-[100px] text-slate-700 text-center border border-x-0 border-t-0 border-b-1 truncate'>Title</th>
                            <th className='p-2 w-auto min-w-min max-w-[100px] text-slate-700 text-center border border-x-0 border-t-0 border-b-1 truncate'>Meeting Date</th>
                            <th className='p-2 w-auto min-w-min max-w-[100px] text-slate-700 text-center border border-x-0 border-t-0 border-b-1 truncate'>Meeting Time</th>
                            <th className='p-2 w-auto min-w-min max-w-[100px] text-slate-700 text-center border border-x-0 border-t-0 border-b-1 truncate'>Meeting length</th>
                            <th className='p-2 w-auto min-w-min max-w-[100px] text-slate-700 text-center border border-x-0 border-t-0 border-b-1 truncate'>Meeting Created By</th>
                            <th className='p-2 w-auto min-w-min max-w-[100px] text-slate-700 text-center border border-x-0 border-t-0 border-b-1 truncate'>Description</th>
                            <th className='p-2 w-auto min-w-min max-w-[100px] text-slate-700 text-center border border-x-0 border-t-0 border-b-1 truncate'>Open</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=''>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700'>1</td>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700'>Leadership</td>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700'>20/02/2023</td>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700'>7:30 AM</td>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700'>45 min</td>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700'>Shashank P</td>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700'>This meeting on leadership</td>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700 cursor-pointer'>
                                <span className='flex justify-center items-center'
                                    onClick={() => {
                                        setShow(true)
                                        setSelectedId("1")
                                    }}
                                >
                                    <OpenIco height={20} width={20} />
                                </span>
                            </td>
                        </tr>
                        <tr className='bg-slate-50'>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700'>1</td>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700'>Leadership</td>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700'>20/02/2023</td>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700'>7:30 AM</td>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700'>45 min</td>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700'>Shashank P</td>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700'>This meeting on leadership</td>
                            <td className='text-sm text-center truncate p-2 w-auto min-w-min max-w-[100px] border border-x-0 border-t-0 border-b-1 text-slate-700 cursor-pointer'>
                                <span className='flex justify-center items-center'
                                    onClick={() => {
                                        setShow(true)
                                        setSelectedId("2")
                                    }}
                                >
                                    <OpenIco height={20} width={20} />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <PaginationBottonSection setPage={setPage} totalCount={10} defaultPage={1} />
        </>
    )
}

export default ScheduledMeeting
