<script setup lang="ts">
import Cookies from 'js-cookie';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function sleep(time: any) {
  return new Promise(resolve => setTimeout(resolve, time));
}

const { data, getSession } = useAuth();

async function _signOut() {
  Cookies.remove('auth.token')
  await sleep(1000)
  location.href="/"
}

</script>


<template>
  <div>
    <nav class="bg-gray-300 py-3">
      <div class="flex justify-between">
        <div>
          <h2 class="text-3xl font-bold">Demo Site</h2>
        </div>
        <div>
          <div class="mr-3">
            <DropdownMenu>
            <DropdownMenuTrigger>{{data.name}}</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem @click="_signOut()">Logout</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>
<script setup lang="ts">
</script>