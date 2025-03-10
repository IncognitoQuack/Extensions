// QNA.js
// This file contains a database of problem descriptions and their corresponding solutions
// Format: Key (extracted from problem description) -> Content (solution to be pasted)

const qnaDatabase = [
    {
      key: "Maari wish to buy watches from the famous online f",
      content: `#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int p, d, m, s;
    cin >> p >> d >> m >> s;
    
    int count = 0;
    while(p<=s) {
        s -= p;
        count++;
        p = max(p - d, m);
    }
    
    cout << count << "\n";
    return 0;
}`
    },
    
    {
      key: "Vinoth's model practical is approaching and he ha",
      content: `#include <iostream>
using namespace std;
int main()
{
    int i,n,t,c=0;
    cin>>n>>t;
    int a[n];
    for(i=0;i<n;i++)
    cin>>a[i];
    
    for(i=0;i<n;i++){
        t-=a[i];
        if(t>=0)
        c++;
        else
        break;
    }
    cout<<c;
	return 0;
} `
    },

    {
        key: "Ace Ventura Pet Detective is on the hunt for a rar",
        content: `#include<bits/stdc++.h>
using namespace std;
#define p1 cout<<"Ace, move fast, pigeon is at ("<<i<<",0)";
#define p2 cout<<"Ace, move fast, pigeon is at ("<<(i-i/z)%z<<","<<i/z<<")";
#define p3 cout<<"No pigeon, try another map, Ace";
#define a continue;
#define f(n) for(int i=0;i<z;i++)
#define while1 while((scanf("%c",&s[i])) != EOF)
int main(){
    string s1; cin>>s1;
    int z=s1.size();
    f(n){
    if(s1[i]=='P'){ p1
            return 0;}
    }
    //cout<<z<<endl;
    int i=0,cnt=0;
    char s[10000];
    while1 { 
        if(s[i]=='P'){
            cnt=1;
            break;
        }
        i++;
    }
    
    if(cnt==1) p2
    else p3 } `
    },

    {
        key: "Avul Pakir Jainulabdeen Abdul Kalam 1st Principal",
        content: `#include <iostream>
using namespace std;
int main(){
    int t,line=0;
    cin>>t;
    while(t--){
        cout<<"Line "<<++line<<":\n";
        int n,i;
        cin>>n;
        char s[7];
        int total=0,donate;
        for(i=0;i<n;i++){
            cin>>s;
            if(s[0]=='d'){
                cin>>donate;
                total+=donate;
            }
            else
            cout<<total<<endl;
        }
    }
    return 0;
} `
    },

    {
        key: "Ganesan has a string S consisting of lowercase Eng",
        content: `#include<iostream>
using namespace std;
int main(){
    string s,t;
    cin>>s>>t;
    int i,flag = 1;
    int check = int(s[0]) - int(t[0]);
    for(i=0;i<(int)s.length();i++)
    if(int(s[i]) - int(t[i])!= check)
    {flag = 0;break;}
    if(flag==0)
    cout<<"No";
    else
    cout<<"Yes";
    return 0;
} `
    },

    {
        key: "RSA is a public key cryptosystem Most important pa",
        content: `#include <bits/stdc++.h>
using namespace std;
void solve(){
    cout<<"break;";
}
bool isProduct(int num)
{
	int cnt = 0;
	for (int i = 2; cnt < 2 && i * i <= num; ++i) {
		while (num % i == 0) {
			num /= i;
			++cnt;
		}
	}
	if (num > 1)
		++cnt;
	return cnt == 2;
}
void findNumbers(int N)
{
	vector<int> vec;
	for (int i = 1; i <= N; i++) {
		if (isProduct(i) ) {
			vec.push_back(i);
		}
	}
	cout<<vec.size()<<endl;
}
int main()
{
    int t,N;
    cin>>t;
    while(t--){
        cin>>N;
        findNumbers(N);
    }
	return 0;
}`
    },

    {
        key: "Siva has several containers each with a number of",
        content: `#include <stdio.h>
#include <stdlib.h>
void insertionSort(long int *p,long int n);
void asd();
int main(){
    asd();
 return 0;
}
void asd()

{
 int q;
 scanf("%d",&q);
 while(q--){
 int n,i,j;
 scanf("%d",&n);
 int M[n][n];
 long int *r,*c,*arr;
 arr=(long int *)malloc(n*n*sizeof(long int));
 *arr=n;
 r=(long int *)malloc(n*sizeof(long int)); c=(long int *)malloc(n*sizeof(long int));
 for(i=0;i<n;i++){
 for(j=0;j<n;j++){
 scanf("%d",&M[i][j]);
 r[i]+=M[i][j];
 c[j]+=M[i][j];
 }
 }
 int count=0;
 for(i=0;i<n;i++){
 for(j=0;j<n;j++){
 if(r[i]==c[j])
 {
 count++;
 break;
 }
 }
 }
 if(count==n)
 printf("Possible\n");
 else
 printf("Impossible\n");
 }
}`
    },

    {
        key: "The Sapphire Consulting and Marketing company is a",
        content: `#include <stdio.h>
#include <stdlib.h>
int isqrt(n) int n; {
int i;
for(i=0;i*i<n;i++);
return i;
}
int main() {
int c;
int t,h,s,i,j;
int d;
scanf("%d",&c);
for(i=0;i<c;i++) {
s=0;
scanf("%d %d",&t,&h);
d=isqrt(t);
s+=t+(d*4);
for(j=1;j<h;j++) {
s+=3;
s+=(d+j)*4;
if((d+j)>2)
s+= (d+j-2)*2;
}
printf("%d liters\n",s);
}
return 0;
}`
    },

    {
        key: "Maakesh caught the trail of the ancient Book of Ev",
        content: `#include <bits/stdc++.h>
using namespace std;
const int N = 100005;
int R,D,n,m,d,h[N];
vector<int> adj[N];
bool prob[N],is[N];
void evil(int u,int p=0){
 h[u]= h[p]+1;
 prob[u] &= (h[u]<=d);
 if(is[u]&&h[u]>D)
 D=h[u],R=u;
 for(unsigned int i=0;i<adj[u].size();++i){
 int v= adj[u][i];
 if(v!=p)
 evil(v,u);
 }
}
int main(){
 cin>>n>>m>>d;memset(prob,true,sizeof(prob));
 h[0]=-1;int a,b,i;D=0;
 for(i=0;i<m;++i)
 cin>>R,is[R]=true;
 for(i=0;i<n-1;++i)
 scanf("%d%d",&a,&b),adj[a].push_back(b),adj[b].push_back(a);
 evil(R);evil(R);evil(R);
 int ret=0;
 for(i=1;i<=n;++i)
 if(prob[i])++ret;
 cout<<ret<<endl;
}`
    },
    
    {
        key: "After the long contest Sameer returned home and go",
        content: `#include <bits/stdc++.h>
using namespace std;
int partition(int array[],int leftIndex,int rightIndex){
 int pivotValue = array[rightIndex];
 int toBePivotIndex = (leftIndex - 1);
 for(int comparisonIndex = leftIndex; comparisonIndex <= rightIndex - 1;
comparisonIndex++){
 if ( array[comparisonIndex] < pivotValue) {

 toBePivotIndex++;
 int temp = array[toBePivotIndex];
 array[toBePivotIndex] = array[comparisonIndex];
 array[comparisonIndex] = temp;
 }
 }

 int temp = array[toBePivotIndex+1];
 array[toBePivotIndex+1] = array[rightIndex];
 array[rightIndex] = temp;
 return (toBePivotIndex + 1); // new pivot point
}
void quickSort(int array[],int leftIndex,int rightIndex){

 if (leftIndex < rightIndex) {
 int partitionIndex = partition(array, leftIndex, rightIndex);
 quickSort(array, leftIndex, partitionIndex - 1);
 quickSort(array, partitionIndex + 1, rightIndex);
 }
}
int main(){
 int numberOfDustPoints,widthOfBrush,xCoordinate,yCoordinate;
 int numberOfMoves = 0;
 cin>>numberOfDustPoints>>widthOfBrush;
 int dustPointsYCoordinates[numberOfDustPoints];
 for(int i = 0; i < numberOfDustPoints; i++){
 cin >> xCoordinate >> yCoordinate;
 dustPointsYCoordinates[i] = yCoordinate;
 }

 quickSort(dustPointsYCoordinates,0, numberOfDustPoints-1);

 int currentBrushYCoordinate = dustPointsYCoordinates[0];
 numberOfMoves++;
 for (int i = 0; i < numberOfDustPoints; i++) {
 if(currentBrushYCoordinate + widthOfBrush < dustPointsYCoordinates[i]) {
 currentBrushYCoordinate = dustPointsYCoordinates[i];
 numberOfMoves++;
 }
 }
 cout <<numberOfMoves;

 return 0;
}`
    },

    {
        key: "A hamburger stand received n orders for the rental",
        content: `#include<bits/stdc++.h>
using namespace std;
int n,l,z;
pair<int,int> a[500020];
int main(){
 cin>>n;
 for(int i=0;i<n;i++){
 cin>>a[i].second>>a[i].first;
 }
 sort(a,a+n);
 for(int i=0;i<n;i++){
 if(l<a[i].second){
 z++;
 l=a[i].first;
 }
 }cout<<z;
 return 0;
}`
    },

    {
        key: "There are n banks in the city where Vishnu lives t",
        content: `#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
ll n,maxs=0;
map<ll,ll> mp;
int main(){
    cin>>n;
    for(ll i=0,x=0,y;i<n;++i)
        cin>>y,maxs=max(maxs,++mp[x+=y]);
    cout<<n-maxs;
}`
    },

    {
        key: "Vaanavan thinks that lucky tickets are the tickets",
        content: `#include<bits/stdc++.h>
using namespace std;
int a[3];
int main()
{
    int n,x,i;
    cin>>n;
    for(i=1;i<=n;i++)
    {
        cin>>x;
        a[x%3]++;
    }
    cout<<a[0]/2+min(a[1],a[2])<<endl;
    return 0;
}`
    },

    {
        key: "Securitas ID on the national Sweden service Pinker",
        content: `#include <iostream>
using namespace std;
void hi(){

}
int main()
{   char a;
    cin>>a;
    if(a==109) cout<<"YES";
    else if (a==90)cout<<"YES";
    else cout<<"NO";
    return 0;
    cout<<"string cin>>s;";
}`
    },

    {
        key: "The translation from the Indian language into the",
        content: `#include<bits/stdc++.h>
using namespace std;
int main (){
string a,b;
cin>>a>>b;
reverse(a.begin(), a.end());
a==b?cout<<"YES": cout<<"NO";
return 0;
}`
    },

    {
        key: "James Bond is playing a variant of Casino where 3",
        content: `#include <stdio.h>

int main() {
    int T;
    scanf("%d", &T);  

    while (T--) {
        int A, B;
        scanf("%d %d", &A, &B); 

        if ((A+B) >= 11){
           int I = 21-(A+B);
            printf("%d\n",I);
        }  
        else {
            int f=-1;
            printf("%d\n",f);
        }
        
    }
}`
    },

    {
        key: "Pradeep having the N student groups at the univers",
        content: `#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int n,s,arr[7]={0};
    cin>>n;
    for(int i=0;i<n;i++){
        cin>>s;
        int k=7,l;
        while(s){
            l=s%10;
            arr[k-1]+=l;;
            k--;
            s=s/10;
        }
    }
    sort(arr,arr+7);
    cout<<arr[6];

}`
    },

    {
        key: "Palani goes to the Koyembedu Vegetables Market to",
        content: `#include <stdio.h>

int main() {
    int T;
    int i;
    scanf("%d", &T);  

    while (T--) {
        int A, B, C;
        scanf("%d %d %d", &A, &B, &C); 

        int prices[3] = {A, B, C};
        int min_price = prices[0];  
        
        for(i=0;i<3;i++) {
            if (prices[i] < min_price) {
                min_price = prices[i]; 
            }
        }

        int total_price = A + B + C - min_price;

        printf("%d\n", total_price); 
    }

    return 0;
}`
    },

    {
        key: "Danika gotten an N  M sheet of squared paper Some",
        content: `#include<cstdio>
#include<cstring>
#include<iostream>
using namespace std;
#define dep(i,n)for(int i=0;i<(n);i++)
int const N=70;
int dx[]={0,0,1,-1};
int dy[]={1,-1,0,0};
char s[N][N];
int vis[N][N];
int n,m;
int squares(int x,int y){
    if(s[x][y]!='#'||vis[x][y])return 0;
    vis[x][y]=1;
    dep(i,4)squares(x+dx[i],y+dy[i]);
    return 1;}

int main(){
   cin>>n>>m;
    dep(i,n)scanf("%s",s[i]);
    int cnt=0;
    dep(i,n)dep(j,m){
        if(s[i][j]=='.')continue;
        cnt++;s[i][j]='.';
        int k=0;memset(vis,0,sizeof(vis));
        dep(d,4)k+=squares(i+dx[d],j+dy[d]);
        if(k>1){puts("1");return 0;

        }s[i][j]='#';}
        printf("%d\n",cnt>2?2:-1);

}`
    },

    {
        key: "Adiththi likes drawing She has drawn many graphs a",
        content: `#include<bits/stdc++.h>
using namespace std;
#define ggg int find(int p) unite(int p,int q) cin>>u>>v;
int i,j,x,y,n,m,ans,f[502],a[502];
int find(int x){return (f[x]==x)?x:f[x]=find(f[x]);}
int main (){
	scanf("%d %d",&n,&m);
	if (m>n) return printf("NO\n"),0;
	for (i=1;i<=n;i++) f[i]=i;
	for (i=1;i<=m;i++){
		scanf("%d %d",&x,&y);a[x]++;a[y]++;
		if (find(x)==find(y)&&i!=n) return printf("NO\n"),0;
		f[find(x)]=find(y);
	}
	for (i=1;i<=n;i++)
		if (a[i]>2) 
			return printf("NO\n"),0;
	printf("YES\n%d\n",n-m);
	for (i=1;i<=n;i++)
		while (a[i]<2){
			ans=i+(n!=1);
			for (j=ans;j<=n;j++)
				if (a[j]<2&&(n<=2||m+1==n||find(i)!=find(j)))
					{printf("%d %d\n",i,j);m++;a[i]++;a[j]++;f[find(i)]=find(j);break;}
	}
	return 0;
}`
    },

    {
        key: "Fatal Eagle has decided to do something to save hi",
        content: `#include <bits/stdc++.h>
using namespace std;

long long int dp[213][213];

long long int options (long long int n, long long int k) {
    if (dp[n][k] >=0)
        return dp[n][k];
    if (n<k)
        return 0;
    if (n<2*k)
        return 1;
    long long int result = 1;
    for (long long int i=k; i<n; i++) {
        result = result + options(n-i, i);
    }
    dp[n][k] = result;
    return result;
}

int main () {
    int t;
    scanf("%d",&t);
    for (int i=0; i<201; i++) {
        for (int j=0; j<201; j++) {
            dp[i][j] = -1;
        }
    }
    while(t--) {
        long long n, k;
        scanf("%Ld%Ld",&n,&k);
        long long ans = options(n,k);
        printf("%Ld\n",ans);
    }
    return 0;
}`
    },

    {
        key: "You have infinite cards for each number between  1",
        content: `#include <bits/stdc++.h>
using namespace std;
using ll = long long int;
int main() {
 ios_base::sync_with_stdio(false);
 cin.tie(NULL);
 cout.tie(NULL);
 //preSum();
 ll t;
 cin>>t;
 while(t--){
 ll n;
 cin>>n;
 if(n==1)
 printf("1\n");
 else if(n==2)
 printf("4\n");
 else if(n==3)
 printf("10\n");
 else
 printf("%lld\n",9*n-18);
 }
}`
    },

    {
        key: "There are  N  sprinklers in a field Each sprinkler",
        content: `#include <iostream>
using namespace std;
int ispositive(int* p,int* r,int n,int k){
int ret=0;
for(int i=0;i<n;i++)if(p[i]>=0 && p[i]+r[i]>=k && p[i]-r[i]<=k)ret++;

return ret;
}
int isnegative(int* p,int* r,int n,int k){
int ret=0;
for(int i=0;i<n;i++)if(p[i]<=0 && p[i]-r[i]<=k && p[i]+r[i]>=k)ret++;
return ret;
}
void fun(){
int n,q;cin>>n>>q;
int pos[n],ran[n],k[q];
for(int i=0;i<n;i++)
cin>>pos[i];
for(int i=0;i<n;i++)
cin>>ran[i];
for(int i=0;i<q;i++)
cin>>k[i];
for(int i=0;i<q;i++){
if(k[i]>0)
cout<<ispositive(pos,ran,n,k[i])<<"\n";
else
cout<<isnegative(pos,ran,n,k[i])<<"\n";
}
}
int main(){
int t;
cin>>t;
while(t--)fun();
}`
    },

    {
        key: "Alice lives in a country In this country there are",
        content: `#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define sky LONG_LONG_MAX
#define ajen LONG_LONG_MIN
#define mod 1000000007
void hi(){
 cout<<"for(i=0;i<n;++i)";
}
int main(){
ios_base::sync_with_stdio(0);
cin.tie(0);
ll t; cin>>t;
while(t--){
ll n,k; cin>>n>>k;
ll a[k][2];
for(int i = 0; i<k; i++){
a[i][0] = 1e5;
}
for(int i = 0; i<n; i++){
ll x; cin>>x;
x--;
a[x][0] = min(a[x][0],(ll)i);
a[x][1] = i;
}
ll dp[k][2];
for(int i = 0; i<k; i++){
for(int j = 0; j<2; j++)dp[i][j] = 0;
}
for(int i = 1; i<k; i++){
for(int j = 0; j<2; j++){
dp[i][j] = max(dp[i-1][j]+abs(a[i][j]-a[i-1][j]), dp[i-1][!j]+abs(a[i][j]-a[i-1][!j]));
}
}
cout<<max(dp[k-1][0],dp[k-1][1])<<endl;
}
return 0;
}`
    },

    {
      key: "ROYGBIV isnt just an acronym its a way of life for",
      content: `#include <iostream>
#include <string.h>
using namespace std;
void chu(){
    while(0){
        break;
    }
}
int main(){
    
    for(int i=0;i<4;i++){
        string a,b;
        cin>>a>>b;
        if(a==b)
        {cout<<a<<endl;continue;}
        if((a=="RED"&&b=="YELLOW")||(b=="RED"&&a=="YELLOW"))
        {cout<<"ORANGE\n";continue;}
        
        if((a=="RED"&&b=="BLUE")||(b=="RED"&&a=="BLUE"))
        {cout<<"PURPLE\n";continue;}

        if((a=="BLUE"&&b=="YELLOW")||(b=="BLUE"&&a=="YELLOW"))
        {cout<<"GREEN\n";continue;}

        if(a=="WHITE")
        {cout<<"LIGHT "<<b<<"\n";continue;}
        
        if(b=="WHITE")
        {cout<<"LIGHT "<<a<<"\n";continue;}

        if(b=="BLACK")
        {cout<<"DARK "<<a<<"\n";continue;}
        
        if(a=="BLACK")
        {cout<<"DARK "<<b<<"\n";continue;}

        cout<<"N/A\n";

    }
    return 0;
    chu();}`
    }
    
  ];
  
  // Export the database
  export default qnaDatabase;