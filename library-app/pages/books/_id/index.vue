<template>
    <div>
        <h2>{{book.title}}</h2>
        <p>{{book.description}}</p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    async asyncData({params}) {
        const {data} = await axios.get(`http://127.0.0.1:3333/books/${params.id}`)
        return { book: data.data}
    }
}
</script>

