<script>
  /**
	 * @type {any}
	 */
   export let data
  const {users} = data
  $: usersData = JSON.parse(users)
  
</script>
<h1 class="text-2xl">{usersData[1].user.emailadress}</h1>