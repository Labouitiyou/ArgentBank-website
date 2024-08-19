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
      
  
      
    // Récupération des données utilisateurs, appel à l'api lors du rendu initial et à chaque fois que le token ou le dispach change via le tableau de dépendance.
      /*useEffect (() => {
        if (!token) {
          navigate('/')
          return
        }
       const fetchUserProfile = () => {
          fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Erreur lors de la requête')
              }
              return response.json()
            })
            .then((data) => {
              dispatch(setUser(data.body)) // demande à Redux d'utiliser l'action "setUser" pour mettre à jour l'état global.
              console.log('body :', data.body)
            })
            .catch((error) => {
              console.error('Erreur:', error)
            })
        }
        fetchUserProfile();
      }, [token, dispatch, navigate]) // Tableau de dépendance. */
      
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