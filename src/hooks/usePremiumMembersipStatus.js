import { useEffect, useState } from "react"
import { useAppSelector } from "../redux/store";

export default function usePremiumMembershipStatus() {
    const { user } = useAppSelector((state) => state.user);
    const [premiumMemberDetails, setPrimiumMemberDetails] = useState({});
    const [premiumMemberId, setPrimiumMemberId] = useState('');
    const [premiumMemberCategory, setPremiumMemberCategory] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5500/premiumMembers/single?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setPrimiumMemberDetails(data);
                setPremiumMemberCategory(data.categoryName);
                setPrimiumMemberId(data._id);

            })
    }, [user])
    return{
        premiumMemberDetails,premiumMemberId,premiumMemberCategory
    }
}