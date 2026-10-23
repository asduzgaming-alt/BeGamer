import type { Locale } from '../i18n';
import { services } from '../content/services';
export const paths = {home:{es:'',en:''},services:{es:'servicios',en:'services'},projects:{es:'proyectos',en:'projects'},about:{es:'nosotros',en:'about'},contact:{es:'contacto',en:'contact'},privacy:{es:'privacidad',en:'privacy'}};
export type RouteId = keyof typeof paths;
export const route = (locale:Locale,id:RouteId) => `/${locale}/${paths[id][locale] ? paths[id][locale]+'/' : ''}`;
export const serviceRoute = (locale:Locale,id:string) => `${route(locale,'services')}${services.find(s=>s.id===id)!.slug[locale]}/`;
export const projectRoute = (locale:Locale,id:string) => `${route(locale,'projects')}${id}/`;
export const review = import.meta.env.PUBLIC_SITE_MODE !== 'production';
