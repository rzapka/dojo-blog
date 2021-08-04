import {ref} from "vue";
import {projectFirestore} from "../firebase/config";

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            const resp = await projectFirestore.collection('posts').doc(id).get()
            if (!resp.exists) {
                throw Error('that post does not exist')
            }
            post.value = {...resp.data(), id: resp.id}
        }
        catch(err) {
            error.value = err.message
        }
    }
    return {post, error, load}
}

export default getPost