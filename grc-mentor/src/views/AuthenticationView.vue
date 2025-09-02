<!-- <template>
    <main class="container py-5">
        <h2>Login</h2>
        <form @submit.prevent="onSubmit">
            <div class="mb-3">
                <label>Email</label>
                <input type="email" v-model="email" class="form-control" required>
            </div>
            <div class="mb-3">
                <label>Password</label>
                <input type="password" v-model="password" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </main>
</template>



<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

async function onSubmit() {
    try {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.value, password: password.value }),
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('user', JSON.stringify(data.user));
            router.push({ name: 'home' }); // redirect to HomeView
        } else {
            alert(data.message || 'Login failed');
        }
    } catch (error) {
        console.error(error);
        alert('Something went wrong!');
    }
}
</script> -->



<template>
  <main class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="card p-4 shadow-sm" style="width: 100%; max-width: 400px; border-radius: 12px;">
      <h2 class="text-center mb-4">Login</h2>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label class="form-label fw-semibold">Email</label>
          <input type="email" v-model="email" class="form-control" placeholder="Enter your email" required>
        </div>
        <div class="mb-3">
          <label class="form-label fw-semibold">Password</label>
          <input type="password" v-model="password" class="form-control" placeholder="Enter your password" required>
        </div>
        <button type="submit" class="btn btn-primary w-100 fw-semibold">Login</button>
      </form>

      <!-- <div class="text-center mt-3">
        <small class="text-muted">Don't have an account? <a href="/signup">Sign up</a></small>
      </div> -->
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

async function onSubmit() {
    try {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.value, password: password.value }),
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('user', JSON.stringify(data.user));
            router.push({ name: 'home' });
        } else {
            alert(data.message || 'Login failed');
        }
    } catch (error) {
        console.error(error);
        alert('Something went wrong!');
    }
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
