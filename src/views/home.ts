import BaseView from './base'

export default class extends BaseView {
    pageBody = ():string => /* html */`
<div class="mdl-grid">
    <div class="logo-card mdl-card mdl-cell mdl-cell--4-col-desktop mdl-shadow--2dp">
      <div class="mdl-card__title"></div>
      <div class="mdl-card__supporting-text mdl-typography--text-center">
        <strong>FUn Work FrameWorK</strong><br />
        A simple and crude frontend framework for teaching web development concepts
      </div>
    </div>
    <div class="mdl-card mdl-cell mdl-cell--8-col-desktop mdl-shadow--2dp">
      <div class="mdl-card__supporting-text">
        <p>Hello, and welcome to fuwk.me. The aim of this site is to help other web developers better themselves by:</p>
        <ul>
          <li>Teaching architecture patterns and concepts, not what a paragraph is or building a shopping cart in React.</li>
          <li>Being a crude SPA (Single Page Application) framework you'll use to learn along the way</li>
          <li>Not really focusing on spit and polish but, hopefully engaging content written in an easy to digest format</li>
        </ul>

      </div>
    </div>
</div>
<div class="mdl-grid">
  <div class="mdl-card mdl-cell mdl-cell--12-col mdl-shadow--2dp">
    <div class="mdl-card__supporting-text">
      <p>I put this site together because across the almost endless torrent of web development learning resources available, they seem to either teach just the basics which becomes boring quickly or, they require a lot of heavy upfront commitment. Neither of which seem fun to me.</p>
      <p>You might already be asking yourself who is this guy to preach to me? I'm definitely not claiming to be the best but, I've been in the industry for about 20 years now and, never stopped learning along the way. If something or someone comes along with an objectively better approach to something, I pay attention, give fair and objective consideration, and possibly change.</p>
      <p>Chances are, if you've read this far, you're interested in actual content. In short, you're going on a journey from learning about how web pages actually get delivered to delivering one (via Netlify), take a look below for a more detailed breakdown and get cracking! You are encouraged to make a local copy of this site by cloning the GIT repo and. Don't hesitate to hate on it so long as you are willing to either leave me alone or make suggestions; I'm trying to keep it simple on purpose.</p>
    </div>
  </div>
</div>
<div class="mdl-grid">
  <div class="mdl-card mdl-cell mdl-cell--12-col mdl-shadow--2dp">
    <ul class="demo-list-three mdl-list">
      <li class="mdl-list__item mdl-list__item--three-line">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons mdl-list__item-avatar">person</i>
          <span>Bryan Cranston</span>
          <span class="mdl-list__item-text-body">
            Bryan Cranston played the role of Walter in Breaking Bad. He is also known
            for playing Hal in Malcom in the Middle.
          </span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
        </span>
      </li>
      <li class="mdl-list__item mdl-list__item--three-line">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons  mdl-list__item-avatar">person</i>
          <span>Aaron Paul</span>
          <span class="mdl-list__item-text-body">
            Aaron Paul played the role of Jesse in Breaking Bad. He also featured in
            the "Need For Speed" Movie.
          </span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
        </span>
      </li>
      <li class="mdl-list__item mdl-list__item--three-line">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons  mdl-list__item-avatar">person</i>
          <span>Bob Odenkirk</span>
          <span class="mdl-list__item-text-body">
            Bob Odinkrik played the role of Saul in Breaking Bad. Due to public fondness for the
            character, Bob stars in his own show now, called "Better Call Saul".
          </span>
        </span>
        <span class="mdl-list__item-secondary-content">
          <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
        </span>
      </li>
    </ul>
  </div>
</div>`

    pageScript = ():string => /* js */`
console.log('hello home');  
`;
    pageStyle = ():string => /* css */`
.logo-card {
}
.logo-card > .mdl-card__title {
    height: 118px;
    background: url('/images/logo.png') center / cover;
}
.logo-card >  {
  width: 100%;
}`
}