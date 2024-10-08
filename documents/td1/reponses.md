# Bloc 1 questions
## Question 1 

"Get" est une requête qui permet de récupérer des données spécifiques comme la langue demander par l'utilisateur par exemple /fr/ dans l'url. 
Au contraire la requête "Post" envoie des données en passant du serveur à l'utilisateur ici la langue choisi par l'utilisateur est modifié pour l'utilisateur.

## Question 2
                          
## 2
| Critère                     | GET                                      | POST                                   |
|-----------------------------|------------------------------------------|----------------------------------------|
| **Exemple d'utilisation**   | Recherche de produits                    | Inscription utilisateur                |
| **URL exemple**             | https://www.monsite-ecommerce.com/recherche?q=chaussures&couleur=noir | https://www.monsite-ecommerce.com/inscription |
| **Visibilité des données**   | Visibles dans l'URL                     | Cachées dans le corps de la requête   |
| **Sécurité**                | Moins sécurisé pour les données sensibles| Plus sécurisé pour les données sensibles|
| **Quantité de données**     | Limitée par la longueur de l'URL        | Peut envoyer de grandes quantités de données |
| **Mise en cache**           | Facilement mise en cache                 | Généralement non mise en cache        |
| **Partage/Favoris**         | Facile à partager ou mettre en favori    | Difficile à partager ou mettre en favori |
| **Type de données**         | Principalement pour récupérer des données | Pour envoyer des données au serveur    |
| **Modification du serveur**  | Ne modifie pas l'état du serveur        | Peut modifier l'état du serveur       |
| **Encodage des données**    | URL-encoded                              | Peut utiliser différents encodages (form-data, JSON, etc.) |
| **Utilisation du navigateur**| Peut être utilisé directement dans la barre d'adresse | Nécessite généralement un formulaire ou du JavaScript |


## Question 3

Le protocole http est extensible par sa personnalisation des méthodes "get" et "post" et les en-têtes et le MIME qui permet de supporter les vidéos, images, textes.

## Question 4

Le HTTP est un protocole sans état car chaque requête est indépendante il faut donc l'utilisation des cookies ou d'un compte qui permettrait de garder les données de l'utilisateur.

## Question 5

Une URL commence par le protocole https:// ensuite vient le nom de domaine par exemple https://github.com , le ".com" est le TLD pour Top-Level Domain puis vient le chemin d'accès ici /gael272/bloc1-2425/

## Question 6
Il y a **5 familles de code status** :
| Familles de code status  | Exemples codes           | Descriptions |
| -------------------      | ------------------- | -------------------- | 
| Informational responses  | 100 Continue                    | Cette réponse intermédiaire indique que tout est OK |
| Successful responses     | 200 OK                    | La requête a réussi |
| Redirection messages     | 300 Multiple choices                    | La requête a plusieurs réponses possibles |
| Client error responses   | 400 Bad request                    | Cette réponse indique que le serveur n'a pas pu comprendre la requête à cause d'une syntaxe invalide |
| Server error responses   | 500 internal Server Error                    | Le serveur a rencontré une situation qu'il ne sait pas traiter |

## Question 7

La négociation de contenu est utile pour avoir une correspondance entre le client et le serveur, le client demande la ressource par exemple Accept-language: en , le serveur cherche sur ses ressources et l'envoie si il la dispose ici : content-language: en et la langue sera changé.

## Question 8-9

## Question 10
| en-tête de requête  | rôle | Exemple |
|---------------|-----------|--------|
| Accept-Language              |Version linguistique souhaitée           | Accept-Language: fr-FR       |
|  Cookie             |  Cookie stocké pour ce serveur         |   Cookie: $Version=1; Content=23     |
|Content-Type               |  	Type MIME ; pertinent pour les requêtes POST et PUT         |Content-Type: application/x_222-form-urlencoded        |
| Host               |   Nom de domaine du serveur        |Host: github.com       |
| User-Agent              |  User-Agent du client         | Chrome/80.0.3987.132 Safari/537.36       |
|  Date             |  Date et heure de la demande         | Date: Mon, 9 March 2020 09:02:22 GMT       |
| Cache-Control| Options du mécanisme de mise en cache|Cache-Control: no-cache |
| Authorization|Données d’authentification |Basic WjbU7D25zTAlV2tZ7== |
