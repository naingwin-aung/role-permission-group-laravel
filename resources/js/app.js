import "@fortawesome/fontawesome-free/css/all.min.css";
import 'vue-multiselect/dist/vue-multiselect.min.css';
import '../css/app.css';
import './bootstrap';

import Multiselect from 'vue-multiselect';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { createPinia } from "pinia";
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(createPinia())
            .use(ZiggyVue)
            .component("Multiselect", Multiselect)
            .mount(el);
    },
    progress: {
        color: '#000000',
    },
});
