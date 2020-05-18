<template>
    <div class="the-main-wrapper">
      <header-container />
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>

import HeaderContainer from './HeaderContainer'
import CasesContainer from './Cases/CasesContainer'

export default {
    name: "TheMainWrapper",
    components: {
        HeaderContainer,
        CasesContainer
    }

}
</script>

<style>

</style>