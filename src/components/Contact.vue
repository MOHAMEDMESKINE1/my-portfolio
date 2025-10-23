<script setup lang="ts">
import { Github, Heart, Instagram, Linkedin } from 'lucide-vue-next'
</script>
<template>
    <div class="">
        <div class="bg-black text-white justify-center gap-6 md:gap-22 p-5 grid grid-cols-1 md:grid-cols-3">
            <div class="flex flex-col gap-4 mt-2">
                <h1 class="text-white">Mohamed Meskine</h1>
                <p class="text-sm text-justify">
                    Full Stack Developer passionate about building high-performance and intuitive web
                    experiences. Specialized in JavaScript technologies (Vue.js, Nuxt js) and Laravel on the
                    backend.
                </p>


                <div class="flex gap-4">
                    <a href="https://github.com/MOHAMEDMESKINE1" target="_blank">
                        <Github class="w-4 h-4  md:w-5 md:h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohamed-meskine-173720180" target="_blank">
                        <Linkedin class="w-4 h-4  md:w-5 md:h-5" />
                    </a>
                    <a href="https://www.instagram.com/med_meskine1" target="_blank">
                        <Instagram class="w-4 h-4  md:w-5 md:h-5" />
                    </a>
                </div>
            </div>
            <div class="flex flex-col gap-4 mt-2 capitalize">
                <h1 class="text-white">navigation</h1>
                <ul class="flex flex-col gap-4 ">
                    <li><a href="#hero" class="hover:text-yellow">Home</a></li>
                    <li><a href="#about" class="hover:text-yellow">About</a></li>
                    <li><a href="#projects" class="hover:text-yellow">Projects</a></li>
                    <li><a href="#contact" class="hover:text-yellow">Contact</a></li>
                </ul>
            </div>
            <div class="flex flex-col gap-4 mt-2">
                <h1 class="text-white capitalize">contact</h1>
                <ul class="flex flex-col gap-4">
                    <li>+212704282927</li>
                    <li>meskinemohameddev@gmail.com</li>
                    <li>Agadir,Maroc</li>
                </ul>
            </div>
        </div>
        <div class="bg-white text-dark flex items-center justify-center">
            <p>© {{ new Date().getFullYear() }} Mohamed Meskine</p>
            <Heart class="w-4 h-4" />
            <p>.  All rights reserved.</p>
        </div>
    </div>
</template>

<style scoped></style>
