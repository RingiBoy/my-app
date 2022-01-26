import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { usersService } from "../../services/user.service";

const UserDetails = () => {
  //Получаем параметр с помощью хука Юзпарамс:
  const params = useParams();
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
      {user.id}){user.name}--{user.email}
    </div>
  );
};

export default UserDetails;
