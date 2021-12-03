import React, { useState, useEffect } from 'react'

function UsersList() {
  const [users, setUsers] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [isError, setIsError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetch(
      `https://randomuser.me/api/?results=5&page=${currentPage}&seed=${'abc'}`,
    )
      .then((response) => response.json())
      .then(({ results }) => {
        setUsers(results)
        setIsFetching(true)
      })
      .catch((isError) => {
        setIsError(isError)
        setIsFetching(true)
      })
  }, [currentPage])

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  if (isFetching) {
    return (
      <div>
        <h1>Пользователи</h1>
        <ul>
          {users.map((u) => (
            <li>
              <img src={u.picture.large} alt="Аватарка" />

              <div>
                <h2>
                  {u.name.first} {u.name.last}
                </h2>
                <h3>Почта: {u.email}</h3>
                <h3>Логин: {u.login.username}</h3>
              </div>
            </li>
          ))}
        </ul>

        <div>
          <button onClick={prevPage}>Назад</button>
          <h2>Мы на странице {currentPage}</h2>
          <button onClick={nextPage}>Вперёд</button>
        </div>
      </div>
    )
  } else if (!isFetching) {
    return <div>Грузим спинер!!!(Воображение)</div>
  } else if (isError) {
    return <div>Извиняюсь у нас возникла ошибочка({isError}) </div>
  }
}

export default UsersList
