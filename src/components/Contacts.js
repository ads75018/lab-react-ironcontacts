import React from 'react';
import contacts from '../contacts.json';

class Contacts extends React.Component {
  state = {
    contacts: [
      {
        name: 'Idris Elba',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg',
        popularity: 11.622713,
        id: '11731993-0604-4bee-80d5-67ad845d0a38',
      },
      {
        name: 'Johnny Depp',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg',
        popularity: 15.656534,
        id: '7dad00f7-3949-477d-a7e2-1467fd2cfc06',
      },
      {
        name: 'Monica Bellucci',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg',
        popularity: 16.096436,
        id: '0ad5e441-3084-47a1-9e9b-b917539bba71',
      },
      {
        name: 'Gal Gadot',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg',
        popularity: 10.049256,
        id: 'b497e3c4-50bb-4ae2-912f-eb36802c5bc2',
      },
      {
        name: 'Ian McKellen',
        pictureUrl:
          'https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg',
        popularity: 10.070132,
        id: '0067ae32-97b6-4431-898e-eb1c10150abb',
      },
    ],
  };

  clickToAdd() {
    let contactsCopy = [...this.state.contacts]; //copy
    contactsCopy.push(contacts[this.randomContact()]);
    this.setState({
      contacts: contactsCopy,
    });
  }

  clickToSortByName() {
    let contactsCopy2 = [...this.state.contacts];

    contactsCopy2.sort((a, b) => a.name.localeCompare(b.name));

    console.log(contactsCopy2);
    this.setState({
      contacts: contactsCopy2,
    });
  }

  clickToSortByPopularity() {
    let contactsCopy3 = [...this.state.contacts];

    contactsCopy3.sort((a, b) => b.popularity - a.popularity);

    console.log(contactsCopy3);
    this.setState({
      contacts: contactsCopy3,
    });
  }

  clickToDelete(contactId) {

    const contactToDeleteIndex = this.state.contacts.findIndex(contact => contact.id === contactId)
    console.log("to delete:", contactToDeleteIndex)


    let contactsCopy4 = [...this.state.contacts];
    contactsCopy4.splice(contactToDeleteIndex, 1)

    this.setState({
      contacts: contactsCopy4
    })
  }

  randomContact() {
    let randomNumber = Math.floor(Math.random() * contacts.length);
    return randomNumber;
  }

  render() {
    return (
      <>
        <button
          onClick={() => this.clickToAdd()}
        >
          Add random contact
        </button>
        <button onClick={() => this.clickToSortByName()}> Sort by name</button>
        <button onClick={() => this.clickToSortByPopularity()}>
          Sort by popularity
        </button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {this.state.contacts.map((contact, i) => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="avatar" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><button onClick={() => this.clickToDelete(contact.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Contacts;
