import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spiritual',
  imports: [MatTabsModule, CommonModule],
  template: `
    <div class="spiritual-container">
      <h1>Spiritual</h1>
      
      <mat-tab-group>
        <mat-tab label="Slokas">
          <div class="tab-content">
            <h2>శరీర శుద్ధి</h2>
            <p>శ్లో॥ అపవిత్రః పవిత్రో వా సర్వావస్థాం᳚ గతోఽపివా ।<br>
              యః స్మరేత్ పుండరీకాక్షం స బాహ్యాభ్యంతరశ్శుచిః ॥</p>
            
            <h3>నమస్కార శ్లోకః</h3>
            <p>త్వమేవ మాతా చ పితా త్వమేవ, త్వమేవ బంధుశ్చ సఖా త్వమేవ । <br>
              త్వమేవ విద్యా ద్రవిణం త్వమేవ, త్వమేవ సర్వం మమ దేవదేవ ॥</p>
            
            <h3>భస్మ ధారణ శ్లోకః</h3>
            <p>శ్రీకరం చ పవిత్రం చ శోక నివారణమ్ ।<br>
              లోకే వశీకరం పుంసాం భస్మం త్ర్యైలోక్య పావనమ్ ॥</p>
            
            <h3>అపరాధ క్షమాపణ స్తోత్రం</h3>
            <p>అపరాధ సహస్రాణి, క్రియంతేఽహర్నిశం మయా ।<br>
              దాసోఽయమితి మాం మత్వా, క్షమస్వ పరమేశ్వర ॥</p>
            
            <p>కరచరణ కృతం-వాఀ కర్మ వాక్కాయజం-వాఀ<br>
              శ్రవణ నయనజం-వాఀ మానసం-వాఀపరాధమ్ ।<br>
              విహిత మవిహితం-వాఀ సర్వమేతత్ క్షమస్వ<br>
              శివ శివ కరుణాబ్ధే శ్రీ మహాదేవ శంభో ॥</p>
            
            <h3>కార్య ప్రారంభ స్తోత్రాః</h3>
            <p>శుక్లాం బరధరం-విఀష్ణుం శశివర్ణం చతుర్భుజమ్ ।<br>
              ప్రసన్నవదనం ధ్యాయేత్ సర్వ విఘ్నోపశాంతయే ॥</p>
            
            <h3>గణేశ స్తోత్రం</h3>
            <p>వక్రతుండ మహాకాయ సూర్యకోటి సమప్రభః ।<br>
              నిర్విఘ్నం కురు మే దేవ సర్వ కార్యేషు సర్వదా ॥</p>
            
            <h3>గాయత్రి మంత్రం</h3>
            <p>ఓం భూర్భువ॒స్సువః॒ । తథ్స॑వి॒తుర్వరే᳚ణ్యం॒ ।<br>
              భర్గో॑ దే॒వస్య॑ ధీమహి । ధియో॒ యో నః॑ ప్రచోదయా᳚త్ ॥</p>
            
            <h3>శివ స్తోత్రం</h3>
            <p>త్ర్యం॑బకం-యఀజామహే సుగం॒ధిం పు॑ష్టి॒వర్ధ॑నమ్ । <br>
              ఉ॒ర్వా॒రు॒కమి॑వ॒ బంధ॑నాన్-మృత్యో॑ర్-ముక్షీయ॒ మాఽమృతా᳚త్ ॥</p>
            
            <h3>హనుమ స్తోత్రాః</h3>
            <p>మనోజవం మారుత తుల్యవేగం జితేంద్రియం బుద్ధిమతాం-వఀరిష్టమ్ ।<br>
              వాతాత్మజం-వాఀనరయూధ ముఖ్యం శ్రీరామదూతం శిరసా నమామి ॥</p>
            
            <h3>శ్రీరామ స్తోత్రాం</h3>
            <p>శ్రీ రామ రామ రామేతి రమే రామే మనోరమే<br>
              సహస్రనామ తత్తుల్యం రామ నామ వరాననే</p>
            
            <h3>శ్రీకృష్ణ స్తోత్రం</h3>
            <p>మందారమూలే మదనాభిరామం<br>
              బింబాధరాపూరిత వేణునాదమ్ ।<br>
              గోగోప గోపీజన మధ్యసంస్థం<br>
              గోపం భజే గోకుల పూర్ణచంద్రమ్ ॥</p>
            
            <h3>శాంతి మంత్రం</h3>
            <p>అసతోమా సద్గమయా ।<br>
              తమసోమా జ్యోతిర్గమయా ।<br>
              మృత్యోర్మా అమృతంగమయా ।<br>
              ఓం శాంతిః శాంతిః శాంతిః</p>
          </div>
        </mat-tab>
        
        <mat-tab label="Songs">
          <div class="tab-content">
            <h2>Spiritual Songs</h2>
            
            <h3>Bhajans</h3>
            <p>Here you can add your favorite spiritual songs and bhajans.</p>
            
            <h3>Devotional Songs</h3>
            <p>Collection of devotional songs and hymns.</p>
            
            <h3>Meditation Music</h3>
            <p>Peaceful meditation and relaxation music.</p>
            
            <h3>Chanting</h3>
            <p>Sacred chants and mantras for spiritual practice.</p>
            
            <h3>Kirtans</h3>
            <p>Traditional kirtans and devotional singing.</p>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: `
    .spiritual-container {
      padding: 20px;
      color: white;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 30px;
      color: #ffd700;
    }
    
    .tab-content {
      padding: 20px;
      line-height: 1.6;
    }
    
    h2 {
      color: #ffd700;
      margin-top: 20px;
      margin-bottom: 15px;
    }
    
    h3 {
      color: #ffa500;
      margin-top: 15px;
      margin-bottom: 10px;
    }
    
    p {
      margin-bottom: 15px;
      text-align: justify;
    }
    
    mat-tab-group {
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 20px;
    }
    
    ::ng-deep .mat-mdc-tab-group {
      color: white;
    }
    
    ::ng-deep .mat-mdc-tab-label {
      color: white !important;
    }
    
    ::ng-deep .mat-mdc-tab-label-active {
      color: #ffd700 !important;
    }
    
    ::ng-deep .mat-mdc-tab-header {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
  `
})
export class SpiritualComponent {

}
