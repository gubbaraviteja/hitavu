import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface Song {
  id: string;
  title: string;
  teluguTitle: string;
  lyrics: string;
  audioUrl?: string;
  hasAudio: boolean;
}

@Component({
  selector: 'app-spiritual',
  imports: [MatTabsModule, CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatListModule],
  template: `
    <div class="spiritual-container">
      <h1>Spiritual</h1>
      
      <mat-tab-group [selectedIndex]="activeTabIndex">
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
            <div class="songs-container">
              <!-- Song Selection -->
              <div class="song-selection" *ngIf="!selectedSong">
                <h2>Spiritual Songs</h2>
                <mat-list>
                  <mat-list-item *ngFor="let song of songs" 
                                (click)="selectSong(song)"
                                class="song-item">
                    <mat-icon matListItemIcon>music_note</mat-icon>
                    <div matListItemTitle>{{ song.title }}</div>
                    <div matListItemLine>{{ song.teluguTitle }}</div>
                    <mat-icon *ngIf="song.hasAudio" matListItemMeta>play_circle</mat-icon>
                    <mat-icon *ngIf="!song.hasAudio" matListItemMeta>music_note</mat-icon>
                  </mat-list-item>
                </mat-list>
              </div>

              <!-- Selected Song View -->
              <div class="selected-song" *ngIf="selectedSong">
                <div class="song-header">
                  <button mat-icon-button (click)="backToSongList()" class="back-button">
                    <mat-icon>arrow_back</mat-icon>
                  </button>
                  <h2>{{ selectedSong.title }}</h2>
                  <h3>{{ selectedSong.teluguTitle }}</h3>
                  <button mat-icon-button (click)="shareSong()" class="share-button">
                    <mat-icon>share</mat-icon>
                  </button>
                </div>

                <!-- Audio Section -->
                <div class="audio-section" *ngIf="selectedSong.hasAudio">
                  <h3>Audio</h3>
                  <div class="audio-controls">
                    <button mat-raised-button color="accent" 
                            *ngIf="!isPlaying"
                            (click)="playAudio()">
                      <mat-icon>play_arrow</mat-icon>
                      Play Audio
                    </button>
                    
                    <button mat-raised-button color="warn" 
                            *ngIf="isPlaying"
                            (click)="stopAudio()">
                      <mat-icon>pause</mat-icon>
                      Pause
                    </button>
                  </div>
                </div>

                <!-- Song Lyrics -->
                <div class="song-lyrics">
                  <h3>Lyrics</h3>
                  <div class="lyrics-content" [innerHTML]="selectedSong.lyrics"></div>
                </div>
              </div>
            </div>
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

    /* Songs specific styles */
    .songs-container {
      min-height: 400px;
    }

    .song-selection {
      max-width: 600px;
      margin: 0 auto;
    }

    .song-item {
      cursor: pointer;
      border-radius: 8px;
      margin-bottom: 8px;
      transition: background-color 0.3s;
    }

    .song-item:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .selected-song {
      max-width: 800px;
      margin: 0 auto;
    }

    .song-header {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      gap: 15px;
    }

    .back-button {
      color: #ffd700;
    }

    .share-button {
      color: #4ecdc4;
      margin-left: auto;
    }

    .song-header h2 {
      margin: 0;
      color: #ffd700;
    }

    .song-header h3 {
      margin: 0;
      color: #ffa500;
    }

    .audio-section {
      background-color: rgba(255, 255, 255, 0.05);
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 30px;
    }

    .audio-controls {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 15px;
    }

    .song-lyrics {
      background-color: rgba(255, 255, 255, 0.05);
      padding: 20px;
      border-radius: 8px;
    }

    .lyrics-content {
      white-space: pre-line;
      line-height: 1.8;
      font-size: 16px;
    }

    .lyrics-content h4 {
      color: #ffd700;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .lyrics-content p {
      margin-bottom: 10px;
      text-align: left;
    }
  `
})
export class SpiritualComponent implements OnInit {
  selectedSong: Song | null = null;
  isPlaying = false;
  currentAudio: HTMLAudioElement | null = null;
  activeTabIndex = 0; // 0 for Slokas, 1 for Songs

  songs: Song[] = [
    {
      id: '1',
      title: 'Song of the Six Enemies',
      teluguTitle: 'అరిషడ్వర్గముల పాట (లింగాష్టకం స్టైల్)',
      lyrics: `||జ్ఞానమనంతం)
ఓం నమ:శివాయ (3 సార్లు)

పల్లవి: జ్ఞానమనంతం – అందరి సొంతం
చేసెద ధ్యానం జ్ఞానం కోసం - శ్వాసమీద ధ్యాసతో చేసెద ధ్యానం ఆత్మజ్ఞానం కోసం
తాత్విక బుద్ధిని పెంచెడి దైవం – తత్ప్రణమామి సదాపరమేశం
ఓం నమ:శివాయ: 3 సార్లు కోరస్ 3 సార్లు

<pre>
చరణం-1: కామంతోనే కర్మలు చేసి, అనుభవించుటకు జన్మలనెత్తి                    (2)
         దు:ఖ సంద్రమున మునిగిన మాకు జ్ఞానమునియ్యవె ఓ పరమేశా (గురుదేవా)

చరణం-2: క్రోధంతో ఆలోచన మరచి, యుక్తాయుక్త వివేకం విడచి                    (2)
         చెడు కర్మలను చేసెడి మాకు జ్ఞానం నియ్యవె ఓ పరమేశా (గురుదేవా) 

చరణం-3: లోభమనెడి స్వార్ధానికిలోనై, పరహితములనే కోరుట మరచి                 (2)
         ఉచ్చనీచములు మరచిన మాకు జ్ఞానం నియ్యవె ఓ పరమేశా (గురుదేవా)

చరణం-4: మోహమనెడి దెయ్యానికి చిక్కి యధార్ధమ్మును పూర్తిగా మరచి               (2) 
         అజ్ఞానమున మునిగిన మాకు జ్ఞానం నియ్యవె ఓ పరమేశా (గురుదేవా)

చరణం-5: మదమనుపొరలు కనులకు కమ్మి ప్రేమ అహింసల పూర్తిగా మరచి            (2) 
         మృగముల సంస్కృతి కలిగిన మాకు జ్ఞానం నియ్యవె ఓ పరమేశా (గురుదేవా)

చరణం-6: మాత్సర్యముతో ఈర్షను కలిగి ఇతరుల సుఖము కోరుట మరచి              (2)
         మాయకులోనై తిరిగెడి మాకు జ్ఞానమునియ్యవె ఓ పరమేశా (గురుదేవా)

చరణం-7: అరిషడ్వర్గము వలలో చిక్కి క్షణికానందము పొందగనెంచి                  (2) 
         కష్ట సంద్రమున మునిగిన మాకు జ్ఞానం నియ్యవె ఓ పరమేశా (గురుదేవా)

చరణం-8: సర్వజీవుల సుఖమునుకోరి- సర్వేశ్వరుని నిత్యమువేడి                    (2) 
        నిష్కామముతో ధ్యానం చేయగ జ్ఞానం నియ్యవె ఓ పరమేశా (గురుదేవా)
</pre>

ప్రతి చరణానికి ఓం నమ:శివాయ 3 సార్లు పలకాలి.

మానవులు పాటించవలసిన విషయాలు:
• దైవాన్ని విశ్వసించాలి
• తల్లిదండ్రులను సేవించాలి
• పెద్దలను గౌరవించాలి
• జ్ఞానులను అనుసరించాలి
• ఆత్మజ్ఞానం సంపాదించాలి
• పరమాత్మ స్థితికి చేరాలి
• ఆరోగ్యమే మహా భాగ్యం
• ఆత్మజ్ఞానమే అసలైన జ్ఞానం
• ఆనందమే మోక్షం
• ఓం సర్వేజన సుఖినోభవంతు
• ఓం సర్వే జనా ఆత్మజ్ఞానోభవంతు
• ఓం లోకాసమస్తా సుఖినోభవంతు

పైవన్నీ నిత్యం ధ్యానయోగసాధనతోనే సాధ్యం

ధర్మో రక్షితి రక్షిత: - జీవో రక్షితి రక్షిత: - వృక్షో రక్షతి రక్షిత:
చేసింది వృథాపోదు - చేయకుండా ఏదీరాదు, మంచికి మంచి, చెడుకు చెడు, ఇంతకు పదింతలు అనుభవానికి వస్తుంది. ఇదే కర్మ సిద్ధాంతం-విశ్వప్రణాళిక
ఓం శాంతి శాంతి శాంతి:

జగజ్జనని శ్రీవాసవిమాత దివ్యాశీస్సులతో..
అందరి ఆగోర్యం, ఆత్మజ్ఞానమే మా ఆశయం
మీ శ్రేయోభిలాషి - శ్రీ గుబ్బాలక్ష్మీనారాయణ గారు
సత్యాన్వేషణ ధ్యానయోగ ఆథ్యాత్మిక క్షేత్రం
వాసవినగర్-1, బుచ్చిరెడ్డిపాళెం, శ్రీ పొట్టి శ్రీరాములు నెల్లూరు జిల్లా
రండి! ఆలకించండి, ఆచరించండి, ఆరోగ్యం, ఆత్మజ్ఞానం పొందండి మీరాక మాకు ఆనందం. ఇదే మా ఆహ్వానం`,
      hasAudio: false
    },
    {
      id: '2',
      title: 'Trust in God and Guru',
      teluguTitle: 'నమ్మరాదేవుని, నమ్మరా సద్గురువును',
      lyrics: `<pre>
నమ్మరాదేవుని, నమ్మరా సద్గురువును      (2)
మాయగోల మనకేల - సద్గురుభోధ వినవేల  (2)
భవభంధములు త్రెంచి పరుగెత్తరా      ||నమ్మరా||

కనుపడునదంతా మాయేనురా - కనపడనిదేదో నిజమౌనురా                  (2) 
అదె సత్యంబని, మదినిత్యంబని నీ మదిలోన పదిలంగ ధ్యానించరా          ||నమ్మరా|| 

జగతిలో జగడాలు మనకేలరా - శాశ్వత సౌఖ్యంబు భలేహాయిరా               (2)  
కర్మఫల సన్యాసము - మోక్షసోపానము (2) భగవద్గీతను శోధించి - సాధించరా ||నమ్మరా|| 

ఆనందరూపము నీవేనురా - హృదయమ్ములో అది దాగుందిరా               (2)
అదె ఆనందము, పరమానందము - బ్రహ్మానందమంతా లోనుందిరా         ||నమ్మరా|| 

గురువుల (పెద్దల) మాటలు వినాలిరా బాధ్యతగా సత్కర్మ చేయాలిరా           (2)
అదె ఆరోగ్యము, అదె ఆనందము - ఆదర్శవంతునిగ జీవించరా            ||నమ్మరా||

నీశ్వాసే నీ గురువు - పితామహబ్రహ్మర్షి సుభాష్ ప్రతీజీ

సేకరించి అందిస్తున్నవారు: మీ శ్రేయోభిలాషి - శ్రీ గుబ్బాలక్ష్మీనారాయణ గారు</pre>`,
      hasAudio: false
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Check if there's a songId in the route parameters
    this.route.params.subscribe(params => {
      const songId = params['songId'];
      if (songId) {
        const song = this.songs.find(s => s.id === songId);
        if (song) {
          this.selectedSong = song;
          this.activeTabIndex = 1; // Switch to Songs tab
        }
      }
    });

    // Check query parameters for tab selection
    this.route.queryParams.subscribe(queryParams => {
      const tab = queryParams['tab'];
      if (tab === 'songs') {
        this.activeTabIndex = 1;
      } else if (tab === 'slokas') {
        this.activeTabIndex = 0;
      }
    });
  }

  selectSong(song: Song) {
    this.selectedSong = song;
    this.activeTabIndex = 1; // Switch to Songs tab
    // Update URL to reflect the selected song
    this.router.navigate(['/spiritual/song', song.id]);
  }

  backToSongList() {
    this.selectedSong = null;
    this.activeTabIndex = 1; // Stay on Songs tab
    this.stopAudio(); // Stop any playing audio when going back
    // Navigate back to the songs list but preserve the tab state
    this.router.navigate(['/spiritual'], { 
      queryParams: { tab: 'songs' },
      queryParamsHandling: 'merge'
    });
  }

  shareSong() {
    if (this.selectedSong) {
      const shareUrl = `${window.location.origin}/spiritual/song/${this.selectedSong.id}`;
      
      // Try to use the Web Share API if available
      if (navigator.share) {
        navigator.share({
          title: this.selectedSong.title,
          text: `Check out this spiritual song: ${this.selectedSong.teluguTitle}`,
          url: shareUrl
        });
      } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareUrl).then(() => {
          alert('Song URL copied to clipboard!');
        }).catch(() => {
          // If clipboard API is not available, show the URL
          prompt('Share this URL:', shareUrl);
        });
      }
    }
  }

  playAudio() {
    if (this.selectedSong?.audioUrl) {
      this.currentAudio = new Audio(this.selectedSong.audioUrl);
      this.currentAudio.play();
      this.isPlaying = true;
      
      this.currentAudio.onended = () => {
        this.isPlaying = false;
      };
    }
  }

  stopAudio() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.isPlaying = false;
    }
  }
}
