# From Zero Maths To Some Codes
From my interests in the maths in some fancy industrial areas, I am writng some maths stuff and can be demo'd with codes in a pedagogical manner. 
I am tring to fix the problem and making it better in a qutie long journey.
## log
- install from: https://nodejs.org/
- check installation: npm -v
- npm install -g @vue/cli
    - encounter ``npm ERR! request to https://registry.npm.taobao.org/@vue%2fcli failed, reason: certificate has expired``
- npm cache clean -f
- npm config set registry https://registry.npmjs.org/
- npm install -g @vue/cli
- npm init -y
- modify json, make sure the last item is not ended with commas and empty line; t'is really a strict format in json.
- npm i vue vuetify @mdi/font
- npm install -D sass vite @vitejs/plugin-vue vite-plugin-vuetify
- follow reference <2> to proceed...
- npm run dev

Saw a blog of reference <3> that vuetify 3 is a quick starter for vue3 beginner. so i try it.
in created folder <ref3_tut>P:
- npm init vuetify
ah, this is a template that accomplishes itself automatically!

In order to learn how to add stuff to vuetify shit, I follow the blog of reference <4>, with the work in folder <passwordtut>.






## reference
1. https://medium.com/@dgongoragamboa/how-to-create-a-vue-project-from-scratch-520dcc293dd2
2. https://nkems-tech-teachings.com/blog/start-vue-project-from-scratch/
3. https://nkems-tech-teachings.com/blog/start-vue-project-with-shortcuts
4. https://nkems-tech-teachings.com/blog/recreate-secret-invasion-website

