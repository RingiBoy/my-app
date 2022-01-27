import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { usersService } from "../../services/user.service";

const UserDetails = () => {
  //Получаем параметр с помощью хука Юзпарамс:
  const params = useParams();
  const navigate = useNavigate();
  let { id } = params;
  //устанавливаем возможность изменения реактом данных черех хук ЮзСтейт
  const [user, setUser] = useState({});
  // //зная ай ди можем использовать юзеЭффект для получаения данный сервисом:
  // useEffect(()=>{
  //     usersService.getById(id).then(user=>setUser(user))
  // },[id])

  const { state } = useLocation(); // мы можем  получить данные с истории браузера, передав стейт. Если мы кликнули по Юзеру то получили данные этого юзера и оно созранилось в истории браузера и теперь отображая данные юзера в какой-то компоненте. в данном случае переход был с ЮзерКомпоненты в ЮзерДетаилс .
 

  useEffect(() => {
    if (state) {
      setUser(state); //если стейт не пустой запихни данные в сетЮзер
      return;
    } //иначе:

    usersService.getById(id).then((user) => setUser(user));
  }, [id]);

  return (
    <div>
      <h5>Details:</h5>
      {user.id}){user.name}--{user.email}
      <br />
      <br />
      <Button onClick={()=>{
            navigate(`/users/${user.id}/posts`);
          }}>Показать посты пользователя</Button>
      <hr />
      <Outlet />
      <hr />
      
    </div>
  );
};

export default UserDetails;
