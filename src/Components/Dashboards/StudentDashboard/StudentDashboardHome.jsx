import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../SharedComponents/Section Title/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import { MdOutlineAssignmentTurnedIn, MdPaid } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";

const StudentDashboardHome = () => {

    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();

    const { data: classes = [] } = useQuery({
        queryKey: ['dashboardClasses'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/all/${user.email}`)
            return res.data;
        }
    })

    const { data: paymentHistory = [] } = useQuery({
        queryKey: ["paymentHistory"],
        queryFn: async () => {
            const res = await axiosSecure.get(
                `payments/history/${user.email}`
            );
            return res.data;
        },
    });

    let selectedClassCount = 0;
    let enrolledClassCount = 0;
    let totalSpent = 0;

    if (classes.selectedClasses)
        selectedClassCount = classes.selectedClasses.length;

    if (classes.enrolledClasses)
        enrolledClassCount = classes.enrolledClasses.length;


    paymentHistory.map(payment => totalSpent += payment.price);

    return (
        <div>
            <SectionTitle title={"Student Dashboard"}></SectionTitle>
            <div className="stats shadow flex">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <BiSelectMultiple></BiSelectMultiple>
                    </div>
                    <div className="stat-title">Selected Classes</div>
                    <div className="stat-value">{selectedClassCount}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <MdOutlineAssignmentTurnedIn></MdOutlineAssignmentTurnedIn>
                    </div>
                    <div className="stat-title">Enrolled Classes</div>
                    <div className="stat-value">{enrolledClassCount}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <MdPaid></MdPaid>
                    </div>
                    <div className="stat-title">Total Spent</div>
                    <div className="stat-value">{totalSpent}$</div>
                </div>

            </div>
        </div>
    );
};

export default StudentDashboardHome;