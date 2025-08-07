import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/utils/shadcn';

const LoadingSkeleton = ({ className }: { className?: string }) => {
    return (
        <main className={cn('container mx-auto my-8 p-4', className)}>
            <Skeleton className="mb-4 h-4 w-48" />
            <div className="mb-4 flex flex-wrap items-center gap-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
            </div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-10 w-[180px]" />
            </div>
            <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="space-y-2">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <Skeleton className="h-4 w-16" />
                                <Skeleton className="h-4 w-20" />
                            </div>
                            <Skeleton className="h-10 w-16" />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default LoadingSkeleton;
