<template>
    <div>
        {{
            this.id
        }}

        {{
            this.email
        }}
    </div>
</template>
<script >
export default {
    props: {
        id: {
            type: String
        },
        email: {
            type: String
        }
    }
}
</script>