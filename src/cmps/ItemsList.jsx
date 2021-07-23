import { utilService } from '../services/util.service.js'
import {ItemsPreview} from './ItemsPreview.jsx'

export function ItemsList({ items }) {
    return (
        <div className="toy-list">
            {items.map(item => {
                return <ItemsPreview key={utilService.makeId()} item={item} />
            })}
        </div>
    )
}