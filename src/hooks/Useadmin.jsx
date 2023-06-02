
import UseAuth from './UseAuth';
import useAxiosSecure from './UseAxiossecure';
import { useQuery } from '@tanstack/react-query';

const UseAdmin = () => {
    const { user } = UseAuth()
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminloading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log('is admin response', res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminloading]
}

export default UseAdmin;
