
import { Component } from 'react'
import { searchService } from '../services/search.service'
import { ItemsList } from '../cmps/ItemsList'

export class IFrame extends Component {
  state = {
    items: searchService.query()
  }

  componentDidMount() {
    this.getItemsFromIkea()
    // searchService.query()
  }

  onSetFilter = (filterBy) => {
    const {items}= this.state
    const filterdItems = items.filter((item) =>item.alt.includes(filterBy))
    // const filterdItems = items.filter((item) =>item.title.includes(filterBy))
    this.setState({ ...this.state, items: filterdItems })
    
  }

  handleChange = ({ target }) => {
    const { value, name: field } = target
    const { filterBy } = this.state
    this.setState({ ...this.state, filterBy: { ...filterBy, [field]: value } }, () => {
      this.onSetFilter(value)
    })
    if(!value){
      this.getItemsFromIkea()
    }
  }
  getItemsFromIkea = () => {
    window.addEventListener("message", (event) => {
      console.log('imgs', event.data);
      this.setState({ ...this.state, items:event.data})
    }, false);
  }


  render() {
    const { items } = this.state
    if (!items) return <div>loading...</div>
    return (
      <div className="container" onClick={()=>this.getItemsFromIkea()}>
        <div className="myCmp"  >
          <input className="todo-search" autoComplete="off" type="text" name="searchTxt" value={this.state.searchTxt} placeholder="Search..." onChange={this.handleChange} />
          <ItemsList items={items} />
        </div>
      </div>
    )
  }
}

