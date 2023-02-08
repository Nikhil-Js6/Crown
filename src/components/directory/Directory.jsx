import { Component } from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

export class Directory extends Component {

    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Hats',
                    imgUrl: 'https://cdn.pichunter.com/343/0/3430981/3430981_9_o.jpg',
                    id: 1,
                },
                {
                    title: 'Jackets',
                    imgUrl: 'https://img.freepik.com/premium-photo/young-sexy-girl-with-long-hair-leather-jacket_149155-2357.jpg?w=360',
                    id: 2,
                },
                {
                    title: 'Sneakers',
                    imgUrl: 'https://res.cloudinary.com/jerrick/image/upload/f_jpg,q_auto,w_720/z3zzrazrknoqm6covqmr.jpg',
                    id: 3,
                },
                {
                    title: 'Men',
                    imgUrl: 'https://www.gqmiddleeast.com/2021/06/marianodivaio_1.jpg',
                    size: 'large',
                    id: 4,
                },
                {
                    title: 'Women',
                    imgUrl: 'https://fapello.com/content/k/a/katrina-jade/1000/katrina-jade_0529.jpg',
                    size: 'large',
                    id: 5,
                },
            ]
        }
    }

  render() {
    return (
      <div className='directory-menu'>
        {
            this.state.sections.map(({ title, imgUrl, id, size }) => (
                <MenuItem key={id} title={title} imgUrl={imgUrl} size={size}/>
            ))
        }
      </div>
    )
  }
}

export default Directory;