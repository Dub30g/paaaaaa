# GitLab branches en merge requests

## Wat zijn branches in GitLab?

In GitLab worden branches gebruikt om features te ontwikkelen die geïsoleerd zijn van de hoofdcode in de main branch. Dit is belangrijk omdat het je toelaat om wijzigingen aan de code te maken zonder de hoofdcode te beïnvloeden, wat kan helpen om problemen en fouten te voorkomen. Als je een branch maakt, maak je een kopie van de code op een bepaald moment in de tijd. Je kunt vervolgens alle wijzigingen aanbrengen die je wilt in de code van de branch zonder de hoofdcode te beïnvloeden.

## Wat zijn merge requests in GitLab?

Zodra je klaar bent met het maken van wijzigingen aan de code in je branch, kun je een merge request maken. Een merge request is een verzoek om de code in je branch te mergen met de hoofdcode. Dit is belangrijk omdat het je toelaat om andere teamleden te betrekken bij het beoordelen en goedkeuren van wijzigingen voordat ze worden gemerged in de hoofdcode. Dit proces kan helpen om problemen en fouten te voorkomen en de kwaliteit van de code te verbeteren. Dit verzoek wordt door één of meer personen beoordeeld voordat het wordt goedgekeurd en gemerged in de hoofdcode.

## Hoe maak ik een branch en merge request in GitLab?

Om een branch in GitLab te maken, ga je naar de pagina "Branches" in je repository en klik je op de knop "New branch". Je wordt gevraagd om een branch-naam in te voeren en een branch te selecteren waarop de nieuwe branch gebaseerd moet worden. Zodra je de branch hebt gemaakt, kun je naar deze branch overschakelen door op de branch-naam te klikken in gitlab. Om in visual studio code deze branch te gebruiken moet je dan naar source control gaan. Hierna moet je op de drie stipjes klikken en dan kan je klikken op "Checkout to". Daarna kan je de branch kiezen die je wilt gebruiken.

Om een merge request te maken, ga je naar de pagina "Merge Requests" in je repository en klik je op de knop "New merge request". Je wordt gevraagd om de bron- en doelbranches voor het merge-verzoek te selecteren. De bronbranch is de branch die de wijzigingen bevat die je wilt mergen, en de doelbranch is de branch waar je de wijzigingen in wilt mergen. Zodra je het merge-verzoek hebt gemaakt, kun je het toewijzen aan iemand voor beoordeling.

## Werken met branches:    

Het maken van branches in gitlab kan eenvoudig in een paar stappen:         

De eerste stap is het inloggen op je GitLab-account en dan naar je project te gaan. Vervolgens moet je klikken op **Vestigingen** onder **Repository** en dan op **Nieuwe vestiging** klikken. In de Nieuwe vestiging scherm, voer je de naam voor de tak in en klik op **Maak een filiaal**. Als allerlaatste krijg je een onderscherm samen met de gemaakte branch.  

Door te werken met branches kunnen beide personen tegelijk veranderingen maken aan de code. Ook gaat het zorgen voor minder verwarring tussen beide partijen. Het gaat altijd door een controle heen voordat deze kunnen worden ingestuurd.      

## Werken met merge requests:  

Het maken van merge requests in gitlab kan eenvoudig in een paar stappen: 

De eerste stap is het vinden van je project. Klik vervolgens op **Verzoeken samenvoegen** en dan op **Nieuw samenvoegverzoek**. Selecteer dan een bron- en doelbranch en klik vervolgens **Vergelijk takken** en ga verder. Vul deze in en selecteer **Maak een samenvoegverzoek**.  

Merge requests zijn noodzakelijk bij het gebruiken van branches. 

## Bronnen:    
[hoe maak je een branch in gitlab?](https://www.tutorialspoint.com/gitlab/gitlab_create_branch.htm)  
[hoe maak je een merge request in gitlab?](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)  
