<template>
    <h1 class="error-mesage">{{ error }}</h1>
</template>

<script>
	export default {
		name: "error-page",
        props: ["err"],
        data(){
			return {
				errors: {
					connection: 'Es ist ein Verbindungsproblem aufgetreten'
                }
            }
        },
        computed: {
			error: function(){
                if(this.errors[this.err]){
                    return this.errors[this.err];
                }else{
                	return 'Ein unbekanntes Problem ist aufgetreten'
                }
			}
        }
	}
</script>

<style scoped>
.error-mesage{
    margin-top: 10%;
}
</style>