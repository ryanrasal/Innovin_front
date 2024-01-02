import { useNavigate } from 'react-router-dom';

export default function SideBar() {
    const navigate = useNavigate()


    return (
        <div className='border w-[15%] h-screen shadow'>
            <ul className='flex flex-col justify-center text-center'>
                <li className='my-3 cursor-pointer hover:underline' onClick={() => navigate('/admin')}>Accueil</li>
                <li className='my-3 cursor-pointer hover:underline' onClick={() => navigate('/admin/adminUser')}>Users</li>
                <li className='my-3 cursor-pointer hover:underline'onClick={() => navigate('/admin/adminWine')}>Wines</li>
                <li className='my-3 cursor-pointer hover:underline'onClick={() => navigate('/admin/adminMessage')}>Messages</li>
            </ul>
        </div>
    );
}
