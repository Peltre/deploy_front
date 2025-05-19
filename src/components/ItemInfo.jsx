import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

export default function ItemInfo({ items }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const item = items.find((i) => i.id === id)
    const [searchParams] = useSearchParams();
  return (
    <div>
      <h1>Item Info {id}</h1>
      <h3>{item.name}</h3>
      <h2>{item.price}</h2>
      <h3>Search parameter {searchParams.get("q")}</h3>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}
