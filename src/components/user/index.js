import React, { Component } from 'react'

class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userList: [
        {
          img: '',
          name: 'Ваня',
          surname: 'Костюшкин',
          checked: false,
        },
        { img: '', name: 'Аня', surname: 'Корпюшкина', checked: false },
        { img: '', name: 'Таня', surname: 'Коклюшкина', checked: false },
        { img: '', name: 'Дима', surname: 'Коршушкин', checked: false },
        { img: '', name: 'Крот', surname: 'Коплюшкинс', checked: false },
      ],
    }
  }

  list = (elem, index) => {
    const del = () => {
      const all = [...this.state.userList]
      all.splice(index, 1)
      this.setState({ userList: all })
    }

    const handleChange = () => {
      const { userList } = this.state
      const newCheck = [...userList]
      newCheck[index] = {
        ...newCheck[index],
        checked: !newCheck[index].checked,
      }
      this.setState({ userList: newCheck })
    }

    return (
      <li key={index}>
        {elem.img} {elem.name} {elem.surname}
        <input
          name={elem.name}
          type="checkbox"
          checked={elem.checked}
          onClick={handleChange}
        />
        <button onClick={del}>Удалить</button>
      </li>
    )
  }

  render() {
    const { userList } = this.state
    const listEnd = userList.map(this.list)

    return (
      <article>
        <div>{listEnd}</div>
      </article>
    )
  }
}

export default User
