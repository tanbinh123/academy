import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbMenuService,
  NbSelectModule,
  NbSidebarModule,
  NbSidebarService,
  NbStepperModule,
} from '@nebular/theme';
import player from 'lottie-web';
import { HighlightModule } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { LottieModule } from 'ngx-lottie';
import { TrophyComponent } from 'src/app/modules/core/components/trophy/trophy.component';
import { CoreModule } from 'src/app/modules/core/core.module';
import { AcademyRoutingModule } from './academy-routing.module';
import { AcademyComponent } from './academy.component';
import { MilestoneComponent } from './components/milestone/milestone.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { SectionComponent } from './components/section/section.component';
import { TaskCodeComponent } from './components/task-code/task-code.component';
import { TaskTextComponent } from './components/task-text/task-text.component';
import { TaskVideoComponent } from './components/task-video/task-video.component';
import { TaskComponent } from './components/task/task.component';
import { DescriptionDirective } from './directives/description.directive';
import { ExerciseListDirective } from './directives/exercise-list.directive';
import { ExerciseDirective } from './directives/exercise.directive';
import { ExtraQuestionDirective } from './directives/extra-question.directive';
import { InfoListDirective } from './directives/info-list.directive';
import { InfoDirective } from './directives/info.directive';
import { LinkDirective } from './directives/link.directive';
import { PageLinkDirective } from './directives/page-link.directive';
import { QuestionListDirective } from './directives/question-list.directive';
import { SidebarTitleDirective } from './directives/sidebar-title.directive';
import { TitleDirective } from './directives/title.directive';
import { VideoListDirective } from './directives/video-list.directive';
import { VideoPipe } from './pipes/video.pipe';
import { AngularComponent } from './sections/angular/angular.component';
import { ArbeitsmethodenComponent } from './sections/arbeitsmethoden/arbeitsmethoden.component';
import { AutomatedTestsComponent } from './sections/automated-tests/automated-tests.component';
import { BootstrapComponent } from './sections/bootstrap/bootstrap.component';
import { CssComponent } from './sections/css/css.component';
import { DesignComponent } from './sections/design/design.component';
import { DockerBasicsComponent } from './sections/docker-basics/docker-basics.component';
import { GitBasicsComponent } from './sections/git-basics/git-basics.component';
import { HtmlComponent } from './sections/html/html.component';
import { IonicComponent } from './sections/ionic/ionic.component';
import { JavascriptComponent } from './sections/javascript/javascript.component';
import { JobComponent } from './sections/job/job.component';
import { NestjsComponent } from './sections/nestjs/nestjs.component';
import { PackagesComponent } from './sections/packages/packages.component';
import { PrototypingComponent } from './sections/prototyping/prototyping.component';
import { TeamWorkComponent } from './sections/teamwork/teamwork.component';
import { TypescriptComponent } from './sections/typescript/typescript.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    // Pages
    AcademyComponent,

    // Sections -> add a new section below the last section-component
    JobComponent,
    HtmlComponent,
    CssComponent,
    BootstrapComponent,
    GitBasicsComponent,
    JavascriptComponent,
    TypescriptComponent,
    TeamWorkComponent,
    PrototypingComponent,
    ArbeitsmethodenComponent,
    AngularComponent,
    IonicComponent,
    NestjsComponent,
    MilestoneComponent,
    PackagesComponent,
    DesignComponent,
    AutomatedTestsComponent,
    DockerBasicsComponent,

    // Components
    SectionComponent,
    TaskComponent,
    TaskTextComponent,
    TaskVideoComponent,
    TaskCodeComponent,
    QuestionsComponent,
    TrophyComponent,

    // Directives
    VideoListDirective,
    TitleDirective,
    DescriptionDirective,
    ExerciseDirective,
    ExerciseListDirective,
    QuestionListDirective,
    ExtraQuestionDirective,
    LinkDirective,
    PageLinkDirective,
    InfoDirective,
    InfoListDirective,
    SidebarTitleDirective,

    // Pipes
    VideoPipe,
  ],
  imports: [
    AcademyRoutingModule,
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbSelectModule,
    CoreModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbStepperModule,
    HighlightModule,
    HighlightPlusModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [NbSidebarService, NbMenuService],
})
export class AcademyModule {}
