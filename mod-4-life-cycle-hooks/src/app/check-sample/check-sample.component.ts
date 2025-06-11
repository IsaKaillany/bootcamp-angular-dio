import {
    Component,
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy,
} from '@angular/core';

@Component({
    selector: 'app-check-sample',
    templateUrl: './check-sample.component.html',
    styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
    implements
        OnInit,
        DoCheck,
        AfterContentChecked,
        AfterContentInit,
        AfterViewChecked,
        AfterViewInit,
        OnDestroy
{
    quantidade: number = 0;

    constructor() {}

    adicionar() {
        this.quantidade += 1;
    }

    decrementar() {
        this.quantidade -= 1;
    }

    //checked -> content -> view

    ngOnInit(): void {
        console.log(`OnInit`);
    }
    ngDoCheck(): void {
        console.log(`DoCheck`);
    }
    // Inicia quando o primeiro conteudo é iniciado
    ngAfterContentInit(): void {
        console.log(`AfterContentInit`);
    }
    // Inicia depois da inicialização da view
    ngAfterViewInit(): void {
        console.log(`AfterViewInit`);
    }
    // Após alguma alteração, verifica o conteúdo
    ngAfterContentChecked(): void {
        console.log(`AfterContentChecked`);
    }
    // Após alguma alteração, verifica a view
    ngAfterViewChecked(): void {
        console.log(`AfterViewChecked`);
    }

    ngOnDestroy(): void {
        console.log(`Goodbye my friend`);
    }
}
