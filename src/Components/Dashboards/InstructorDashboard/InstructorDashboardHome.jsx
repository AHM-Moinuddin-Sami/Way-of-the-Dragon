import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../SharedComponents/Section Title/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { BiErrorAlt } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlinePending } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { TbSum } from "react-icons/tb";


const InstructorDashboardHome = () => {

    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { data: myClasses = [] } = useQuery({
        queryKey: ['myClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes/instructor/all/${user.email}`)
            return res.data;
        }
    })

    let pendingClasses = 0;
    let approvedClasses = 0;
    let deniedClasses = 0;
    let totalEnrolledStudents = 0;
    let classCount = 0;

    myClasses.map(myClass => {
        classCount++;
        totalEnrolledStudents += myClass.enrolledStudents;
        if (myClass.status === "pending")
            pendingClasses++;
        else if (myClass.status === "approved")
            approvedClasses++;
        else
            deniedClasses++;

    })

    return (
        <div>
            <SectionTitle title={"Instructor Dashboard"}></SectionTitle>
            <div className="stats shadow">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <TbSum></TbSum>
                    </div>
                    <div className="stat-title">Total Classes</div>
                    <div className="stat-value">{classCount}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <AiOutlineCheck></AiOutlineCheck>
                    </div>
                    <div className="stat-title">Approved Classes</div>
                    <div className="stat-value">{approvedClasses}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <MdOutlinePending></MdOutlinePending>
                    </div>
                    <div className="stat-title">Pending Classes</div>
                    <div className="stat-value">{pendingClasses}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <BiErrorAlt></BiErrorAlt>
                    </div>
                    <div className="stat-title">Denied Classes</div>
                    <div className="stat-value">{deniedClasses}</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <IoIosPeople></IoIosPeople>
                    </div>
                    <div className="stat-title">Total Students</div>
                    <div className="stat-value">{totalEnrolledStudents}</div>
                </div>

            </div>
        </div>
    );
};

export default InstructorDashboardHome;