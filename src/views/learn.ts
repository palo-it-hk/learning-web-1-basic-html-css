import BaseView from './base'

export default class extends BaseView {
    pageBody = ():string => /* html */`
        <h1>To the service mobile</h1>
        <p>
            Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
        </p>
        <p>
            <a fwk-link href="/services/testies" data-link>View recent posts</a>.
        </p>`;
}