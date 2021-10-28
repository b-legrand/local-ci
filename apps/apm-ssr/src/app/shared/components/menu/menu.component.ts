import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  state,
  style,
  query,
  stagger,
  animateChild,
} from '@angular/animations';
import {
  faBars,
  faBoxOpen,
  faCoffee,
  faCode,
  faCodeBranch,
  faCompass,
  faRobot,
  faTachometerAlt,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { delayWhen, filter } from 'rxjs/operators';
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
        query(':enter', style({ transform: 'translateX(-200%)' }), {
          optional: true,
        }),
        query(
          ':enter',
          [
            style({ transform: 'translateX(-200%)' }),
            stagger(150, [
              animate('0.3s', style({ transform: 'translateX(0)' })),
            ]),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            stagger(150, [
              animate('0.3s', style({ transform: 'translateX(-200%)' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('menuItem', [
      state(':enter', style({ transform: 'scale(1)' })),
      transition('* => focused', [
        animate('.3s', style({ transform: 'scale(1.25)' })),
      ]),
      // empty transition needed for parent stagger
      transition(':leave', []),
    ]),
    // animation on ngIf to wait for child animation
    trigger('childWaiter', [
      transition('* => void', [
        query('@*', [animateChild()], { optional: true }),
      ]),
    ]),
  ],
})
export class MenuComponent implements OnInit {
  public opened = false;
  public isAnimating: Subject<boolean> = new BehaviorSubject<boolean>(false);
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
      link: 'http://gitea.local',
      icon: faCodeBranch,
    },
    {
      state: 'hidden',
      label: 'Lighthouse CI',
      link: 'http://light.local',
      icon: faLightbulb,
    },
    {
      state: 'hidden',
      label: 'Sonar',
      link: 'http://sonar.local',
      icon: faCode,
    },
    {
      state: 'hidden',
      label: 'Kibana',
      link: 'http://super.local',
      icon: faCompass,
    },
    {
      state: 'hidden',
      label: 'Application Performance Management',
      link: 'http://apm.local',
      icon: faTachometerAlt,
    },
    {
      state: 'hidden',
      label: 'Drone',
      link: 'http://drone.local',
      icon: faRobot,
    },
    {
      state: 'hidden',
      label: 'Nexus',
      link: 'http://nexus.local',
      icon: faBoxOpen,
    },
    {
      state: 'hidden',
      label: 'Pause',
      link: 'http://nexus.local',
      icon: faCoffee,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  toggleMenu(): void {
    const animateDone$ = this.isAnimating.pipe(
      filter((value) => value === false)
    );
    of(!this.opened)
      .pipe(delayWhen(() => animateDone$))
      .subscribe(() => {
        this.opened = !this.opened;
        this.items.forEach((item) => {
          item.state = this.opened ? 'shown' : 'hidden';
        });
      });
  }
  openMenu(): void {
    this.opened = true;
  }
  closeMenu(): void {
    this.opened = false;
  }
  itemBy(link: Link): string {
    return link.index;
  }
}
