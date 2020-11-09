import { Component, OnInit } from '@angular/core';
import { v4 } from 'uuid';
import {
  trigger,
  transition,
  animate,
  state,
  style,
  query,
  stagger,
} from '@angular/animations';
import {
  faBars,
  faBoxOpen,
  faBomb,
  faCoffee,
  faCode,
  faCodeBranch,
  faBug,
  faCompass,
  faRobot,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
interface Link {
  state: 'hovered' | 'hidden' | 'clicked' | 'shown';
  index?: string;
  link?: string;
  icon?: any;
  label?: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('menuItems', [
      transition('* => *', [
        // each time the binding value changes
        query(
          ':leave',
          [stagger(100, [animate('0.5s', style({ opacity: 0 }))])],
          { optional: true }
        ),
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(100, [animate('0.5s', style({ opacity: 1 }))]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('menuItem', [
      state('hidden', style({ transform: 'scale(0)' })),
      transition('* => shown', [
        animate('.3s', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class MenuComponent implements OnInit {
  public opened = false;
  hamburger: Link = {
    state: 'shown',
    icon: faBars,
    label: 'toggle menu',
    link: '#',
  };
  items: Link[] = [
    {
      state: 'hidden',
      label: 'Gitea',
      index: v4(),
      link: 'http://gitea.local',
      icon: faCodeBranch,
    },
    {
      state: 'hidden',
      label: 'layers',
      index: v4(),
      link: 'http://light.local',
      icon: faBomb,
    },
    {
      state: 'hidden',
      label: 'Sonar',
      index: v4(),
      link: 'http://sonar.local',
      icon: faCode,
    },
    {
      state: 'hidden',
      label: 'Kibana',
      index: v4(),
      link: 'http://super.local',
      icon: faCompass,
    },
    {
      state: 'hidden',
      label: 'App Performance Management',
      index: v4(),
      link: 'http://apm.local',
      icon: faTachometerAlt,
    },
    {
      state: 'hidden',
      label: 'Drone',
      index: v4(),
      link: 'http://drone.local',
      icon: faRobot,
    },
    {
      state: 'hidden',
      label: 'Nexus',
      index: v4(),
      link: 'http://nexus.local',
      icon: faBoxOpen,
    },
    {
      state: 'hidden',
      label: 'Pause',
      index: v4(),
      link: 'http://nexus.local',
      icon: faCoffee,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  toggleMenu(): void {
    this.opened = !this.opened;
    this.items.forEach((item) => {
      item.state = this.opened ? 'shown' : 'hidden';
    });
  }
  openMenu(): void {
    this.opened = true;
  }
  closeMenu(): void {
    this.opened = false;
  }
  itemBy(link: Link) {
    return link.index;
  }
}
