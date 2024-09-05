import "../user/User.css"
import Account from '../../Components/account/Account'
import EditName from "../../Components/editName/EditName"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from "../../API/Api"


const User = () => {
  const accountItems = [
        { 
          id: '1',
          title: 'Argent Bank Checking (x8349)',
          amount: '$2,082.79',
          description: 'Available Balance',
          button: 'View transactions',
        },
        {
          id: '2',
          title: 'Argent Bank Savings (x6712)',
          amount: '$10,928.42',
          description: 'Available Balance',
          button: 'View transactions',
        },
        {
          id: '3',
          title: 'Argent Bank Credit Card (x8349)',
          amount: '$184.30',
          description: 'Current Balance',
          button: 'View transactions',
        },
    ]
    
    //Récupération de la valeur du token, appel de la fonction dispatch pour envoyer des actions au store et de la fonction useNavigate pour rediriger l'utilisateur vers une page.
    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect (() => {
        if (!token) {
          navigate('/')
          return
        }
    }, [token, navigate])

    if (token) {
        dispatch(fetchUserProfile(token));
    } 
    
      
  return (
      <main className='bgDark'>
      <EditName />
      {accountItems.map((accountItem, index) => (
        <Account key={accountItem.id} accountItem={accountItem} />
      ))}
    </main>
  );
};
export default User;